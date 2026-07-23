// ============================================================================
// Speech-attempt scorer.
//
// HONESTY CONTRACT (what each number really is):
//   - wordAccuracy / completeness / missing / extra / incorrect words:
//     REAL. Computed by aligning the recognizer's actual transcript against
//     the expected sentence (weighted Levenshtein alignment below).
//   - fluency: REAL but coarse. Derived from actual recording duration and
//     pause gaps between recognition events. It measures pace and pausing,
//     not articulation.
//   - clarity: an ESTIMATE derived from the speech recognizer's own
//     utterance confidence. It is NOT a phoneme-level pronunciation score.
//     The UI must label it "recognition clarity", never "pronunciation".
//   - pronunciationAssessment: always null in this build. It is the typed
//     integration point for a real pronunciation API (Azure Pronunciation
//     Assessment, forced alignment, etc.). See PronunciationAdapter below.
//
// Nothing in this file fabricates stress/intonation/phoneme measurements.
// ============================================================================

import { tokenize } from '../data/dialogueSchema.js?v=content108';

export const STRICTNESS_THRESHOLDS = {
  //                weighted word accuracy | clarity floor | fluency floor
  relaxed:        { wordAccuracy: 60, clarity: 0,  fluency: 0,  allowMissingFn: true  },
  normal:         { wordAccuracy: 78, clarity: 30, fluency: 35, allowMissingFn: true  },
  strict:         { wordAccuracy: 92, clarity: 45, fluency: 50, allowMissingFn: false },
  'near-perfect': { wordAccuracy: 98, clarity: 55, fluency: 60, allowMissingFn: false }
};

// Closed-class words. Missing one is a smaller error than missing a content
// word (and is forgiven entirely at relaxed/normal strictness), but it is
// always reported in feedback because articles/prepositions are exactly what
// A1-A2 learners drop.
const FUNCTION_WORDS = new Set([
  'a','an','the','to','for','of','in','on','at','from','with','as','do','does','did',
  'have','has','had','would','could','should','is','am','are','was','were','be','been',
  'and','or','so','it','its','that','this','there','here','my','your','his','her','our','their','me','him','us','them','i','you','we','they','he','she','just','please'
]);

// Words that invert or carry the core meaning of a sentence. Dropping or
// substituting one of these is ALWAYS a rejection, at every strictness --
// "I do like it" vs "I do not like it" must never be accepted as equal.
const NEGATION_WORDS = new Set(['not','no','never','nothing','nobody','none','neither','nor','cannot']);

// Number words -- a substitution between two different numbers ("fifteen" vs
// "fifty") changes meaning and is always a rejection.
const NUMBER_WORDS = new Set([
  'zero','one','two','three','four','five','six','seven','eight','nine','ten',
  'eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen',
  'twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety','hundred','thousand','million',
  'first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','fifteenth'
]);

// Hesitation fillers: ignored entirely (neither penalized nor shown as
// errors) -- punishing "um" would punish thinking, not English.
const FILLER_WORDS = new Set(['um','uh','er','erm','hmm','mm']);

// Contraction expansion applied to BOTH the expected sentence and the
// transcript before alignment, so "I'm flying" === "I am flying" and
// whichever form Chrome's recognizer returns, the comparison is fair.
const CONTRACTIONS = [
  [/\bi'm\b/g, 'i am'], [/\byou're\b/g, 'you are'], [/\bwe're\b/g, 'we are'],
  [/\bthey're\b/g, 'they are'], [/\bhe's\b/g, 'he is'], [/\bshe's\b/g, 'she is'],
  [/\bit's\b/g, 'it is'], [/\bthat's\b/g, 'that is'], [/\bthere's\b/g, 'there is'],
  [/\bhere's\b/g, 'here is'], [/\bwhat's\b/g, 'what is'], [/\bwho's\b/g, 'who is'],
  [/\bhow's\b/g, 'how is'], [/\bwhere's\b/g, 'where is'],
  [/\bi'll\b/g, 'i will'], [/\byou'll\b/g, 'you will'], [/\bwe'll\b/g, 'we will'],
  [/\bhe'll\b/g, 'he will'], [/\bshe'll\b/g, 'she will'], [/\bit'll\b/g, 'it will'],
  [/\bthat'll\b/g, 'that will'], [/\bthere'll\b/g, 'there will'],
  [/\bi'd\b/g, 'i would'], [/\byou'd\b/g, 'you would'], [/\bwe'd\b/g, 'we would'],
  [/\bhe'd\b/g, 'he would'], [/\bshe'd\b/g, 'she would'], [/\bthey'd\b/g, 'they would'],
  [/\bi've\b/g, 'i have'], [/\byou've\b/g, 'you have'], [/\bwe've\b/g, 'we have'],
  [/\bthey've\b/g, 'they have'],
  [/\bwon't\b/g, 'will not'], [/\bcan't\b/g, 'cannot'], [/\bdon't\b/g, 'do not'],
  [/\bdoesn't\b/g, 'does not'], [/\bdidn't\b/g, 'did not'], [/\bisn't\b/g, 'is not'],
  [/\baren't\b/g, 'are not'], [/\bwasn't\b/g, 'was not'], [/\bweren't\b/g, 'were not'],
  [/\bhasn't\b/g, 'has not'], [/\bhaven't\b/g, 'have not'], [/\bhadn't\b/g, 'had not'],
  [/\bwouldn't\b/g, 'would not'], [/\bcouldn't\b/g, 'could not'], [/\bshouldn't\b/g, 'should not'],
  [/\bmustn't\b/g, 'must not'], [/\blet's\b/g, 'let us'], [/\bshan't\b/g, 'shall not']
];

// Digits -> words so "3" from the recognizer matches "three" in content.
const DIGIT_WORDS = {
  '0':'zero','1':'one','2':'two','3':'three','4':'four','5':'five','6':'six','7':'seven','8':'eight','9':'nine',
  '10':'ten','11':'eleven','12':'twelve','13':'thirteen','14':'fourteen','15':'fifteen','16':'sixteen',
  '17':'seventeen','18':'eighteen','19':'nineteen','20':'twenty','30':'thirty','40':'forty','50':'fifty',
  '60':'sixty','70':'seventy','80':'eighty','90':'ninety','100':'hundred','1000':'thousand'
};

// Equivalences the recognizer commonly produces that are not user errors.
const ASR_EQUIVALENTS = new Map([
  ['ok', 'okay'], ['mr', 'mister'], ['mrs', 'missus'], ['dr', 'doctor'],
  ['cause', 'because'], ['gonna', 'going to'], ['wanna', 'want to'], ['gotta', 'got to']
]);

function normalizeSentence(sentence) {
  let s = sentence.toLowerCase().normalize('NFKC').replace(/[’‘]/g, "'");
  for (const [re, expansion] of CONTRACTIONS) s = s.replace(re, expansion);
  // Expand multi-word ASR equivalents ("gonna" -> "going to") before tokenizing.
  s = s.split(/\s+/).map(w => {
    const bare = w.replace(/[.,!?;:"()]/g, '');
    return ASR_EQUIVALENTS.get(bare) || w;
  }).join(' ');
  return s;
}

function toTokens(sentence) {
  return tokenize(normalizeSentence(sentence)).map(w => DIGIT_WORDS[w] || w).filter(w => !FILLER_WORDS.has(w));
}

function wordWeight(word) {
  if (NEGATION_WORDS.has(word)) return 2.5;
  if (NUMBER_WORDS.has(word)) return 2.0;
  if (FUNCTION_WORDS.has(word)) return 0.45;
  return 1.0;
}

/** Levenshtein alignment with backtrace. Returns ordered ops:
 *  match | sub | del (missing) | ins (extra). */
function alignWords(expected, actual) {
  const n = expected.length, m = actual.length;
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  for (let i = 0; i <= n; i++) dp[i][0] = i;
  for (let j = 0; j <= m; j++) dp[0][j] = j;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= m; j++) {
      dp[i][j] = expected[i - 1] === actual[j - 1]
        ? dp[i - 1][j - 1]
        : 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
    }
  }
  const ops = [];
  let i = n, j = m;
  while (i > 0 || j > 0) {
    if (i > 0 && j > 0 && expected[i - 1] === actual[j - 1]) {
      ops.unshift({ type: 'match', expected: expected[i - 1], actual: actual[j - 1] }); i--; j--;
    } else if (i > 0 && j > 0 && dp[i][j] === dp[i - 1][j - 1] + 1) {
      ops.unshift({ type: 'sub', expected: expected[i - 1], actual: actual[j - 1] }); i--; j--;
    } else if (i > 0 && dp[i][j] === dp[i - 1][j] + 1) {
      ops.unshift({ type: 'del', expected: expected[i - 1] }); i--;
    } else {
      ops.unshift({ type: 'ins', actual: actual[j - 1] }); j--;
    }
  }
  return ops;
}

function scoreAgainstTarget(targetSentence, transcript) {
  const expectedTokens = toTokens(targetSentence);
  const actualTokens = toTokens(transcript);
  const ops = alignWords(expectedTokens, actualTokens);

  let earned = 0, possible = 0, extraPenalty = 0;
  for (const op of ops) {
    if (op.type === 'match') { earned += wordWeight(op.expected); possible += wordWeight(op.expected); }
    else if (op.type === 'sub' || op.type === 'del') { possible += wordWeight(op.expected); }
    else if (op.type === 'ins') { extraPenalty += wordWeight(op.actual) * 0.5; }
  }
  const raw = possible > 0 ? Math.max(0, (earned - extraPenalty) / possible) : 0;
  const wordAccuracy = Math.round(raw * 100);

  const matches = ops.filter(o => o.type === 'match').length;
  const completeness = expectedTokens.length ? Math.round((matches / expectedTokens.length) * 100) : 0;

  return { ops, wordAccuracy, completeness, expectedTokens, actualTokens };
}

/** Detects errors that flip or corrupt meaning; these force rejection at any
 *  strictness. Returns human-readable reasons. */
function findCriticalErrors(ops) {
  const reasons = [];
  for (const op of ops) {
    if (op.type === 'del' && NEGATION_WORDS.has(op.expected)) {
      reasons.push(`Missing "${op.expected}" changes the meaning of the sentence.`);
    }
    if (op.type === 'sub' && (NEGATION_WORDS.has(op.expected) || NEGATION_WORDS.has(op.actual))) {
      reasons.push(`"${op.actual}" instead of "${op.expected}" changes the meaning.`);
    }
    if (op.type === 'sub' && NUMBER_WORDS.has(op.expected) && NUMBER_WORDS.has(op.actual) && op.expected !== op.actual) {
      reasons.push(`The number "${op.actual}" is not "${op.expected}" -- numbers must be exact.`);
    }
    if (op.type === 'del' && NUMBER_WORDS.has(op.expected)) {
      reasons.push(`The number "${op.expected}" was not heard.`);
    }
    if (op.type === 'ins' && NEGATION_WORDS.has(op.actual)) {
      reasons.push(`Adding "${op.actual}" changes the meaning of the sentence.`);
    }
  }
  return reasons;
}

function scoreFluency(timing, expectedWordCount) {
  // No timing data (typed fallback, some browsers): return null rather than
  // inventing a number. The acceptance check skips null fluency.
  if (!timing || !timing.durationMs) return { fluency: null, wpm: null, longestPauseMs: null, tips: [] };

  const tips = [];
  const seconds = timing.durationMs / 1000;
  const wpm = seconds > 0 ? Math.round((expectedWordCount / seconds) * 60) : 0;
  let fluency = 85;

  if (wpm > 0 && wpm < 50) {
    fluency -= 30;
    tips.push('Try saying the whole sentence in one smooth flow, a little faster.');
  } else if (wpm > 0 && wpm < 75) {
    fluency -= 12;
  } else if (wpm > 230) {
    fluency -= 15;
    tips.push('Try saying the sentence a little more slowly and clearly.');
  }

  const longestPauseMs = Math.max(0, ...(timing.pauseGapsMs || [0]));
  if (longestPauseMs > 1800) {
    fluency -= 25;
    tips.push('There was a long pause in the middle -- try to keep the sentence connected.');
  } else if (longestPauseMs > 1000) {
    fluency -= 10;
  }

  return { fluency: Math.max(0, Math.min(100, fluency)), wpm, longestPauseMs, tips };
}

function buildWordTips(ops, expectedRaw) {
  const tips = [];
  for (const op of ops) {
    if (op.type === 'del') {
      tips.push(FUNCTION_WORDS.has(op.expected)
        ? `The small word "${op.expected}" was not detected -- these words are quick but important.`
        : `Missing word: "${op.expected}".`);
    } else if (op.type === 'sub') {
      if (op.actual + 's' === op.expected) {
        tips.push(`Pronounce the final "s" in "${op.expected}" -- "${op.actual}" was heard instead.`);
      } else if (op.expected + 's' === op.actual) {
        tips.push(`"${op.expected}" is singular here -- "${op.actual}" was heard.`);
      } else {
        tips.push(`Expected "${op.expected}" but heard "${op.actual}".`);
      }
    } else if (op.type === 'ins') {
      tips.push(`Extra word heard: "${op.actual}".`);
    }
  }
  if (tips.length > 3) {
    tips.length = 3;
    tips.push('Listen to the sentence again, then try it slowly in one calm breath.');
  }
  return tips;
}

/**
 * PronunciationAdapter -- the integration point for a real pronunciation
 * assessment service. A production adapter (e.g. Azure Pronunciation
 * Assessment via a backend proxy that holds the API key -- never put keys in
 * this frontend) implements assess() and returns phoneme/word-level scores;
 * scoreAttempt() will then include them as `pronunciationAssessment`.
 */
export class PronunciationAdapter {
  /** @returns {Promise<null | {overall:number, words:Array<{word:string, score:number, phonemes?:Array}>}>} */
  async assess(_audioBlob, _referenceText) { return null; }
}
let pronunciationAdapter = new PronunciationAdapter();
export function setPronunciationAdapter(adapter) { pronunciationAdapter = adapter; }
export function getPronunciationAdapter() { return pronunciationAdapter; }

/**
 * Scores one spoken attempt against a dialogue turn.
 * @param {object} p
 * @param {string}   p.expected     canonical expected sentence
 * @param {string[]} [p.altAccepted] alternate correct phrasings
 * @param {string}   p.transcript   recognized text
 * @param {number}   [p.confidence] recognizer utterance confidence 0-1
 * @param {object}   [p.timing]     { durationMs, pauseGapsMs }
 * @param {string}   p.strictness   key of STRICTNESS_THRESHOLDS
 */
export function scoreAttempt({ expected, altAccepted = [], transcript, confidence, timing, strictness = 'normal' }) {
  const thresholds = STRICTNESS_THRESHOLDS[strictness] || STRICTNESS_THRESHOLDS.normal;

  // Empty / whitespace transcript is always a rejection, never scored.
  if (!transcript || !toTokens(transcript).length) {
    return {
      accepted: false, empty: true,
      wordAccuracy: 0, completeness: 0, clarity: null, fluency: null,
      grammarAdherence: 0, overallScore: 0,
      diff: toTokens(expected).map(w => ({ type: 'del', expected: w })),
      missing: toTokens(expected), incorrect: [], extra: [], problemWords: [],
      criticalErrors: [], tips: ['No speech was detected. Press the microphone and speak clearly.'],
      wpm: null, longestPauseMs: null,
      assessmentMode: 'transcript-based', pronunciationAssessment: null,
      strictnessUsed: strictness, matchedTarget: expected
    };
  }

  // Score against the canonical sentence and every accepted alternative;
  // keep whichever target the attempt matches best.
  const targets = [expected, ...altAccepted];
  let best = null, bestTarget = expected;
  for (const t of targets) {
    const s = scoreAgainstTarget(t, transcript);
    if (!best || s.wordAccuracy > best.wordAccuracy) { best = s; bestTarget = t; }
  }

  const criticalErrors = findCriticalErrors(best.ops);
  const { fluency, wpm, longestPauseMs, tips: fluencyTips } = scoreFluency(timing, best.expectedTokens.length);

  // clarity: recognition-confidence based ESTIMATE (see header). null when
  // the browser doesn't report confidence -- never invented.
  const clarity = (typeof confidence === 'number' && confidence > 0)
    ? Math.round(confidence * 100)
    : null;

  const wordTips = buildWordTips(best.ops, expected);

  const missing = best.ops.filter(o => o.type === 'del').map(o => o.expected);
  const incorrect = best.ops.filter(o => o.type === 'sub').map(o => ({ expected: o.expected, said: o.actual }));
  const extra = best.ops.filter(o => o.type === 'ins').map(o => o.actual);
  const problemWords = [...missing, ...incorrect.map(w => w.expected)].filter(w => !FUNCTION_WORDS.has(w));

  const grammarAdherence = Math.max(0, 100 - missing.length * 10 - incorrect.length * 14 - extra.length * 6);

  let accepted =
    criticalErrors.length === 0 &&
    best.wordAccuracy >= thresholds.wordAccuracy &&
    (clarity === null || clarity >= thresholds.clarity) &&
    (fluency === null || fluency >= thresholds.fluency);

  if (accepted && !thresholds.allowMissingFn && missing.length > 0) accepted = false;
  if (accepted && missing.some(w => !FUNCTION_WORDS.has(w))) accepted = false; // content word missing -> reject at any strictness

  const parts = [best.wordAccuracy];
  if (clarity !== null) parts.push(clarity);
  if (fluency !== null) parts.push(fluency);
  const overallScore = Math.round(parts.reduce((a, b) => a + b, 0) / parts.length);

  return {
    accepted, empty: false,
    wordAccuracy: best.wordAccuracy,
    completeness: best.completeness,
    clarity, fluency, grammarAdherence, overallScore,
    diff: best.ops, missing, incorrect, extra, problemWords, criticalErrors,
    tips: [...(criticalErrors.length ? criticalErrors : []), ...wordTips, ...fluencyTips],
    wpm, longestPauseMs,
    assessmentMode: 'transcript-based',
    pronunciationAssessment: null, // populated only by a real PronunciationAdapter
    strictnessUsed: strictness,
    matchedTarget: bestTarget
  };
}
