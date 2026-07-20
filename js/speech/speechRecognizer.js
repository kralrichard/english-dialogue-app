// ============================================================================
// Speech recognition service.
//
// Real provider: wraps the browser's native SpeechRecognition /
// webkitSpeechRecognition (Chrome, Edge, recent Safari). The transcript it
// produces is genuine ASR output -- not mocked.
//
// TypedFallbackProvider: for browsers with no SpeechRecognition (or denied
// mic permission), the user types their answer instead. It is clearly
// surfaced in the UI as "typed practice mode" -- never passed off as speech.
//
// Both implement the same event interface, so a production cloud ASR
// (Azure Speech, Google STT, Deepgram, ...) is one more class emitting the
// same events. Cloud providers MUST be called through a backend/serverless
// proxy that holds the API key -- never embed keys in this frontend.
//
// Events:
//   'state'  -> 'listening' | 'analyzing' | 'no-speech'
//   'result' -> { transcript, confidence, timing:{durationMs, pauseGapsMs} }
//   'error'  -> { code: 'permission-denied'|'unsupported'|'network'|'aborted'|'unknown', message }
//   'idle'   -> recognition session ended without producing a result
//
// NOTE: SpeechRecognition needs a secure context (https or localhost).
// Serve via the bundled local server (see README); file:// will not work.
// ============================================================================

const NativeSpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || null;

export function isNativeSpeechSupported() {
  return !!NativeSpeechRecognition && window.isSecureContext !== false;
}

const ACCENT_TO_BCP47 = {
  american: 'en-US', british: 'en-GB', australian: 'en-AU', canadian: 'en-CA',
  irish: 'en-IE', scottish: 'en-GB', indian: 'en-IN', international: 'en-US'
};

class EventedProvider {
  constructor() { this._listeners = {}; }
  on(event, fn) {
    (this._listeners[event] ||= []).push(fn);
    return () => { this._listeners[event] = (this._listeners[event] || []).filter(f => f !== fn); };
  }
  emit(event, payload) {
    for (const fn of this._listeners[event] || []) fn(payload);
  }
  removeAllListeners() { this._listeners = {}; }
}

export class NativeSpeechProvider extends EventedProvider {
  constructor() {
    super();
    this.recognition = null;
    this.active = false;      // guards against overlapping sessions
    this._gotResult = false;
    this.kind = 'native-asr';
  }

  start({ accent = 'american' } = {}) {
    if (!NativeSpeechRecognition) {
      this.emit('error', { code: 'unsupported', message: 'Speech recognition is not supported in this browser.' });
      return;
    }
    if (this.active) this.abort(); // never allow two simultaneous recordings

    const rec = new NativeSpeechRecognition();
    rec.lang = ACCENT_TO_BCP47[accent] || 'en-US';
    rec.continuous = false;        // browser auto-stops after silence
    rec.interimResults = true;
    rec.maxAlternatives = 3;

    const startTime = Date.now();
    let lastEventTime = startTime;
    const pauseGaps = [];

    this.recognition = rec;
    this.active = true;
    this._gotResult = false;

    rec.onstart = () => this.emit('state', 'listening');

    rec.onresult = (event) => {
      const now = Date.now();
      const gap = now - lastEventTime;
      if (gap > 450) pauseGaps.push(gap);
      lastEventTime = now;

      const result = event.results[event.results.length - 1];
      if (result.isFinal && !this._gotResult) {
        this._gotResult = true;
        const alt = result[0];
        this.emit('state', 'analyzing');
        this.emit('result', {
          transcript: alt.transcript || '',
          confidence: typeof alt.confidence === 'number' ? alt.confidence : null,
          timing: { durationMs: now - startTime, pauseGapsMs: pauseGaps }
        });
      }
    };

    rec.onerror = (event) => {
      this.active = false;
      if (event.error === 'no-speech') {
        this.emit('state', 'no-speech');
      } else if (event.error === 'not-allowed' || event.error === 'service-not-allowed') {
        this.emit('error', { code: 'permission-denied', message: 'Microphone permission was denied.' });
      } else if (event.error === 'network') {
        this.emit('error', { code: 'network', message: 'The speech service could not be reached. Check your connection.' });
      } else if (event.error === 'aborted') {
        this.emit('error', { code: 'aborted', message: 'Recording was cancelled.' });
      } else {
        this.emit('error', { code: 'unknown', message: `Recognition error: ${event.error}` });
      }
    };

    rec.onend = () => {
      this.active = false;
      this.recognition = null;
      // Session closed without a final result and without an error we
      // already surfaced -> tell the UI so it never hangs in 'listening'.
      if (!this._gotResult) this.emit('idle');
    };

    try {
      rec.start();
    } catch {
      this.active = false;
      this.emit('error', { code: 'unknown', message: 'Could not start the microphone.' });
    }
  }

  stop()  { if (this.recognition) try { this.recognition.stop(); } catch {} }
  abort() {
    if (this.recognition) {
      const rec = this.recognition;
      // Detach handlers so a deliberate abort doesn't surface as an error.
      rec.onerror = null; rec.onresult = null;
      rec.onend = () => { this.active = false; };
      try { rec.abort(); } catch {}
      this.recognition = null;
      this.active = false;
    }
  }
}

/** Typed practice mode -- the honest fallback when no ASR is available.
 *  Scored identically to a real transcript, but with no timing/confidence
 *  data (the scorer returns null for fluency/clarity rather than inventing
 *  numbers). */
export class TypedFallbackProvider extends EventedProvider {
  constructor() {
    super();
    this.kind = 'typed-fallback';
    this.active = false;
  }
  start() {
    this.active = true;
    this.emit('state', 'listening');
  }
  submitText(text) {
    if (!this.active) return;
    this.active = false;
    this.emit('state', 'analyzing');
    setTimeout(() => {
      this.emit('result', { transcript: text || '', confidence: null, timing: null });
    }, 200);
  }
  stop()  { this.active = false; }
  abort() { this.active = false; }
}

export function createSpeechProvider() {
  return isNativeSpeechSupported() ? new NativeSpeechProvider() : new TypedFallbackProvider();
}
