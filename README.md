# SpeakScenes — English Speaking Practice

An interactive English-speaking application built entirely around **two-person spoken dialogues** in realistic locations (hotel, airport, café, hospital, job interview, philosophical debate…). The app-controlled character speaks; **you must answer with your voice**. The dialogue only continues when your spoken sentence is recognized and accepted.

Plain HTML/CSS/JS ES modules — no build step, no dependencies.

## Run it

Speech recognition and the microphone require a **secure context** (localhost or https). `file://` will not work. A zero-dependency PowerShell static server is included:

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1
# then open http://localhost:8123 in Chrome or Edge
```

**Browser support:** Chrome/Edge give the full experience (Web Speech API for both recognition and voices). Browsers without SpeechRecognition automatically fall back to a clearly labeled **typed practice mode** — never silently.

## Run the tests

Open `http://localhost:8123/tests/` — the suite exercises the real app modules (scorer, engine, schema, review scheduling) in the browser and reports pass/fail counts. It snapshots and restores `localStorage`, so it never corrupts your progress.

## Architecture

```
index.html, css/styles.css      shell + design system + scene animations
js/app.js                       bootstrap, content validation, routes
js/ui/router.js                 hash router with screen cleanup lifecycle
js/ui/screens/                  home, picker, dialogue, progress, review, settings
js/ui/components/               scene backgrounds, SVG avatars, mic button, feedback panel
js/engine/dialogueEngine.js     guarded turn-by-turn state machine
js/speech/speechRecognizer.js   Web Speech ASR + typed fallback (same event interface)
js/speech/scorer.js             weighted alignment scorer (see honesty notes below)
js/speech/tts.js                SpeechSynthesis wrapper (rate/volume/accent, watchdog)
js/data/                        levels, locations catalog, dialogue schema + content
js/progress/                    progress store, SM-2 review queue, settings, session resume
tests/                          browser-run automated test suite
```

### Adding dialogues

Create a file in `js/data/dialogues/` exporting an array of `createDialogue({...})` objects (see any existing file for the format: turns, Turkish translations, per-word grammar notes, IPA, alternate accepted phrasings), then register it in `js/data/dialogues/index.js`. Malformed content fails loudly at boot with the offending dialogue id.

## Honesty notes (what the scores really mean)

- **Word accuracy / missing / extra / incorrect words** — real, from aligning the recognizer's actual transcript with the expected sentence (contraction-, number-, and filler-aware).
- **Critical errors** — dropped/added negation and number substitutions ("fifteen" vs "fifty") block acceptance at *every* strictness level.
- **Fluency** — real but coarse: computed from recording duration and pause gaps. It measures pace, not articulation.
- **Recognition clarity** — derived from the recognizer's utterance confidence. It is **not** a phoneme-level pronunciation score and is labeled accordingly in the UI.
- **Pronunciation assessment** — deliberately absent. `js/speech/scorer.js` exports a `PronunciationAdapter` interface; connect a real service (e.g. Azure Pronunciation Assessment) **through a backend proxy that holds the API key** and the UI will surface its word/phoneme data. No key ever belongs in this frontend.

## External services (optional upgrades)

| Capability | Current | Production option |
|---|---|---|
| Speech-to-text | Browser Web Speech API | Azure Speech / Google STT / Deepgram via backend proxy, implementing the same provider events |
| Pronunciation scoring | Not claimed | Azure Pronunciation Assessment via `PronunciationAdapter` |
| Voices | Browser SpeechSynthesis voices | Cloud TTS behind the same `tts` interface |
| Persistence | localStorage | Swap `js/progress/storage.js` for an API-backed store |
