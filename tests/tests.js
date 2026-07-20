// SpeakScenes automated test suite. Runs in the browser (same modules the
// app uses -- no mocked copies). Covers: scorer correctness (contractions,
// negation, numbers, strictness modes, fillers, empty input), dialogue
// engine state transitions and guards, schema validation, and SM-2 review
// scheduling. localStorage keys are snapshotted and restored so running
// tests never corrupts real user progress.

import { scoreAttempt } from '../js/speech/scorer.js';
import { DialogueEngine } from '../js/engine/dialogueEngine.js';
import { validateDialogue, tokenize } from '../js/data/dialogueSchema.js';

const results = [];
const pending = [];
function test(name, fn) {
  try {
    const r = fn();
    if (r && typeof r.then === 'function') {
      // async test: record after it settles
      pending.push(
        r.then(() => results.push({ name, ok: true }))
         .catch(e => results.push({ name, ok: false, err: String(e.message || e) }))
      );
    } else {
      results.push({ name, ok: true });
    }
  } catch (e) {
    results.push({ name, ok: false, err: String(e.message || e) });
  }
}
function assert(cond, msg) { if (!cond) throw new Error(msg || 'assertion failed'); }
function assertEq(a, b, msg) { if (a !== b) throw new Error(`${msg || 'not equal'}: got ${JSON.stringify(a)}, want ${JSON.stringify(b)}`); }

// ---------------- scorer ----------------

test('contraction: "I\'m" === "I am" (strict)', () => {
  const s = scoreAttempt({ expected: "I'm flying to London.", transcript: 'i am flying to london', strictness: 'strict' });
  assert(s.accepted, `should accept, got accuracy ${s.wordAccuracy}, missing: ${s.missing}`);
});

test('contraction: "do not" === "don\'t" (near-perfect)', () => {
  const s = scoreAttempt({ expected: 'Please do not pause between words.', transcript: "please don't pause between words", strictness: 'near-perfect' });
  assert(s.accepted, `should accept, missing: ${s.missing}, incorrect: ${JSON.stringify(s.incorrect)}`);
});

test('contraction: "I\'ve" === "I have", "can\'t" === "cannot"', () => {
  const a = scoreAttempt({ expected: "I've had a sore throat.", transcript: 'i have had a sore throat', strictness: 'strict' });
  assert(a.accepted, 'I have =/= I\'ve');
  const b = scoreAttempt({ expected: "I can't go today.", transcript: 'i cannot go today', strictness: 'strict' });
  assert(b.accepted, 'cannot =/= can\'t');
});

test('capitalization and punctuation are ignored', () => {
  const s = scoreAttempt({ expected: 'Yes, I booked a room for three nights.', transcript: 'YES I BOOKED A ROOM FOR THREE NIGHTS', strictness: 'near-perfect' });
  assert(s.accepted, `should accept, accuracy ${s.wordAccuracy}`);
});

test('missing "not" is rejected even at relaxed strictness', () => {
  const s = scoreAttempt({ expected: "I don't want chicken.", transcript: 'i want chicken', strictness: 'relaxed' });
  assert(!s.accepted, 'meaning-inverting miss must be rejected');
  assert(s.criticalErrors.length > 0, 'should report a critical error');
});

test('added "not" is rejected ("I can go" vs "I can not go")', () => {
  const s = scoreAttempt({ expected: 'I can go.', transcript: 'i can not go', strictness: 'relaxed' });
  assert(!s.accepted, 'meaning inversion by insertion must be rejected');
});

test('"fifteen" is not "fifty" even at relaxed strictness', () => {
  const s = scoreAttempt({ expected: 'That costs fifty dollars.', transcript: 'that costs fifteen dollars', strictness: 'relaxed' });
  assert(!s.accepted, 'number substitution must be rejected');
  assert(s.criticalErrors.some(e => e.includes('fifteen')), 'critical error should name the number');
});

test('digit transcript "3" matches word "three"', () => {
  const s = scoreAttempt({ expected: 'I booked a room for three nights.', transcript: 'i booked a room for 3 nights', strictness: 'strict' });
  assert(s.accepted, `digits should normalize to words; missing: ${s.missing}`);
});

test('empty transcript is always rejected', () => {
  const s = scoreAttempt({ expected: 'Hello there.', transcript: '   ', strictness: 'relaxed' });
  assert(!s.accepted && s.empty, 'empty must be rejected and flagged');
});

test('filler words (um, uh) are ignored, not penalized', () => {
  const s = scoreAttempt({ expected: 'I would like a coffee.', transcript: 'um i would like uh a coffee', strictness: 'strict' });
  assert(s.accepted, `fillers should not block acceptance; extra: ${s.extra}`);
});

test('missing article passes at relaxed, fails at near-perfect', () => {
  const relaxed = scoreAttempt({ expected: 'Can I have a medium latte, please?', transcript: 'can i have medium latte please', strictness: 'relaxed' });
  assert(relaxed.accepted, `relaxed should forgive the missing article (accuracy ${relaxed.wordAccuracy})`);
  const perfect = scoreAttempt({ expected: 'Can I have a medium latte, please?', transcript: 'can i have medium latte please', strictness: 'near-perfect' });
  assert(!perfect.accepted, 'near-perfect must require the article');
});

test('missing content word rejected at every strictness', () => {
  const s = scoreAttempt({ expected: 'I booked a room for three nights.', transcript: 'i booked a for three nights', strictness: 'relaxed' });
  assert(!s.accepted, 'missing "room" must reject even at relaxed');
});

test('wrong content word rejected at normal', () => {
  const s = scoreAttempt({ expected: 'To the central station, please.', transcript: 'to the central airport please', strictness: 'normal' });
  assert(!s.accepted, 'station->airport must reject');
  assert(s.incorrect.some(w => w.expected === 'station' && w.said === 'airport'), 'diff should show the substitution');
});

test('unrelated sentence with some matching words is rejected', () => {
  const s = scoreAttempt({ expected: 'I would like to book a room for two nights.', transcript: 'i like the blue car parked outside', strictness: 'relaxed' });
  assert(!s.accepted, `unrelated speech must be rejected (accuracy ${s.wordAccuracy})`);
});

test('plural miss produces final-s tip and rejects at near-perfect', () => {
  const s = scoreAttempt({ expected: 'I booked a room for three nights.', transcript: 'i booked a room for three night', strictness: 'near-perfect' });
  assert(!s.accepted, 'singular for plural must reject at near-perfect');
  assert(s.tips.some(t => t.includes('final "s"')), `tips should mention final s: ${s.tips}`);
});

test('altAccepted phrasings are accepted', () => {
  const s = scoreAttempt({
    expected: 'Yes, I booked a room for three nights.',
    altAccepted: ['Yes, I have a reservation for three nights.'],
    transcript: 'yes i have a reservation for three nights', strictness: 'strict'
  });
  assert(s.accepted, 'alternate phrasing should be accepted');
});

test('word accuracy is weighted: content words matter more', () => {
  const missFn = scoreAttempt({ expected: 'I am waiting for the bus.', transcript: 'i am waiting for bus', strictness: 'relaxed' });
  const missContent = scoreAttempt({ expected: 'I am waiting for the bus.', transcript: 'i am waiting for the', strictness: 'relaxed' });
  assert(missFn.wordAccuracy > missContent.wordAccuracy, `function-word miss (${missFn.wordAccuracy}) should score higher than content-word miss (${missContent.wordAccuracy})`);
});

test('scorer is honest: no clarity/fluency without data', () => {
  const s = scoreAttempt({ expected: 'Hello there.', transcript: 'hello there', strictness: 'normal' });
  assertEq(s.clarity, null, 'clarity must be null without confidence');
  assertEq(s.fluency, null, 'fluency must be null without timing');
  assertEq(s.pronunciationAssessment, null, 'no fake pronunciation data');
  assert(s.accepted, 'still accepted on word accuracy alone');
});

test('slow speech with long pause lowers fluency', () => {
  const s = scoreAttempt({
    expected: 'I would like to book a room.', transcript: 'i would like to book a room',
    timing: { durationMs: 15000, pauseGapsMs: [2500] }, strictness: 'relaxed'
  });
  assert(typeof s.fluency === 'number' && s.fluency < 60, `fluency should be low, got ${s.fluency}`);
  assert(s.tips.some(t => t.toLowerCase().includes('pause')), 'should tip about the pause');
});

// ---------------- engine ----------------

const TEST_DIALOGUE = validateDialogue({
  id: 't-1', locationId: 'cafe', scenarioId: 'ordering-coffee', title: 'T', level: 'A1',
  variant: 1, length: 'short', goal: 'g', tags: [], sceneType: 'cafe',
  characters: {
    A: { name: 'A', role: 'r', gender: 'female', accent: 'american', avatarPreset: 'x' },
    B: { name: 'B', role: 'r', gender: 'neutral', accent: 'american', avatarPreset: 'x' }
  },
  turns: [
    { speaker: 'A', text: 'Hello!', translation_tr: 't', emotion: 'friendly', register: 'neutral' },
    { speaker: 'B', expected: 'Hi, how are you?', translation_tr: 't', register: 'neutral' },
    { speaker: 'A', text: 'Great, thanks.', translation_tr: 't', emotion: 'happy', register: 'neutral' },
    { speaker: 'B', expected: 'Good to hear.', translation_tr: 't', register: 'neutral' }
  ]
});

test('engine: starts in character-speaking, advances to awaiting-user', () => {
  const e = new DialogueEngine(TEST_DIALOGUE);
  assertEq(e.state, 'character-speaking');
  assert(e.characterFinishedSpeaking(), 'advance should succeed');
  assertEq(e.state, 'awaiting-user');
  assertEq(e.turnIndex, 1);
});

test('engine: guards -- wrong-state calls are ignored', () => {
  const e = new DialogueEngine(TEST_DIALOGUE);
  assertEq(e.submitAttempt({ transcript: 'x', score: {}, accepted: true }), null, 'submit during character-speaking must be ignored');
  e.characterFinishedSpeaking();
  assertEq(e.characterFinishedSpeaking(), false, 'stale TTS callback must not double-advance');
  assertEq(e.turnIndex, 1, 'turn must not have skipped');
});

test('engine: reject -> turn-rejected -> retry -> awaiting-user', () => {
  const e = new DialogueEngine(TEST_DIALOGUE);
  e.characterFinishedSpeaking();
  e.beginScoring();
  e.submitAttempt({ transcript: 'wrong', score: { wordAccuracy: 10, problemWords: [] }, accepted: false });
  assertEq(e.state, 'turn-rejected');
  assertEq(e.turnIndex, 1, 'rejection must not advance');
  assert(e.retry(), 'retry should work');
  assertEq(e.state, 'awaiting-user');
});

test('engine: accept advances; full dialogue completes with summary', () => {
  const e = new DialogueEngine(TEST_DIALOGUE);
  e.characterFinishedSpeaking();
  e.beginScoring();
  e.submitAttempt({ transcript: 'hi how are you', score: { wordAccuracy: 100, grammarAdherence: 100, problemWords: [] }, accepted: true });
  assertEq(e.state, 'character-speaking');
  e.characterFinishedSpeaking();
  e.beginScoring();
  e.submitAttempt({ transcript: 'good to hear', score: { wordAccuracy: 90, grammarAdherence: 100, problemWords: ['hear'] }, accepted: true });
  assertEq(e.state, 'complete');
  const sum = e.getSummary();
  assertEq(sum.turnsCompleted, 2);
  assertEq(sum.totalAttempts, 2);
  assertEq(sum.accuracy, 95);
  assert(sum.difficultWords.includes('hear'), 'difficult words tracked');
});

test('engine: multiple retries recorded in history', () => {
  const e = new DialogueEngine(TEST_DIALOGUE);
  e.characterFinishedSpeaking();
  for (let i = 0; i < 3; i++) {
    e.beginScoring();
    e.submitAttempt({ transcript: 'nope', score: { wordAccuracy: 5, problemWords: [] }, accepted: false });
    e.retry();
  }
  assertEq(e.history[1].attempts.length, 3);
  assertEq(e.state, 'awaiting-user');
});

test('engine: resume from saved turn index (refresh recovery)', () => {
  const e = new DialogueEngine(TEST_DIALOGUE, { startTurnIndex: 3 });
  assertEq(e.state, 'awaiting-user', 'turn 3 is a user turn');
  assertEq(e.turnIndex, 3);
  const ser = e.serialize();
  assertEq(ser.turnIndex, 3);
  assertEq(ser.dialogueId, 't-1');
});

test('engine: out-of-range resume clamps to complete', () => {
  const e = new DialogueEngine(TEST_DIALOGUE, { startTurnIndex: 99 });
  assertEq(e.state, 'complete');
});

test('engine: cancelScoring returns to awaiting-user (no-speech path)', () => {
  const e = new DialogueEngine(TEST_DIALOGUE);
  e.characterFinishedSpeaking();
  e.beginScoring();
  assertEq(e.state, 'scoring');
  assert(e.cancelScoring());
  assertEq(e.state, 'awaiting-user');
});

// ---------------- schema ----------------

test('schema: invalid dialogue throws with details', () => {
  let threw = false;
  try {
    validateDialogue({ id: 'bad', turns: [] });
  } catch (e) {
    threw = true;
    assert(String(e.message).includes('bad'), 'error should name the dialogue');
  }
  assert(threw, 'must throw on malformed content');
});

test('schema: tokenize strips punctuation, keeps words', () => {
  const t = tokenize('Hello, how are you?');
  assertEq(t.join(' '), 'hello how are you');
});

test('all shipped dialogues are valid and alternate A/B sensibly', async () => {
  const { ALL_DIALOGUES } = await import('../js/data/dialogues/index.js');
  assert(ALL_DIALOGUES.length >= 18, `expected >= 18 dialogues, got ${ALL_DIALOGUES.length}`);
  for (const d of ALL_DIALOGUES) {
    validateDialogue(d); // throws if bad
    assert(d.turns.some(t => t.speaker === 'B'), `${d.id} has no user turns`);
    assert(d.turns[0].speaker === 'A', `${d.id} must open with the app character`);
    for (const t of d.turns) {
      if (t.speaker === 'B') assert(t.translation_tr, `${d.id} B-turn missing Turkish translation`);
    }
  }
});

// ---------------- review scheduling (SM-2) ----------------

test('review: queue, grade, schedule', async () => {
  // Snapshot real user data; restore afterwards.
  const KEY = 'edapp:review:v1';
  const backup = localStorage.getItem(KEY);
  try {
    localStorage.removeItem(KEY);
    // Fresh import trick isn't possible for the singleton (module cache), so
    // manipulate through its API against a clean key by re-reading state.
    const { reviewSystem } = await import('../js/progress/reviewSystem.js');
    reviewSystem.state = { items: [] }; // reset in-memory state for the test

    const dlg = { id: 'rev-d', title: 'Rev', locationId: 'cafe' };
    reviewSystem.queueFailedTurn(dlg, 1, { expected: 'Test sentence.', translation_tr: 't' });
    reviewSystem.queueFailedTurn(dlg, 1, { expected: 'Test sentence.', translation_tr: 't' }); // idempotent
    assertEq(reviewSystem.getAllItems().length, 1, 'no duplicate queue entries');
    assertEq(reviewSystem.getDueItems().length, 1, 'immediately due');

    const id = reviewSystem.getAllItems()[0].id;
    reviewSystem.grade(id, 5);
    const item = reviewSystem.getAllItems()[0];
    assert(new Date(item.dueDate) > new Date(), 'graded item scheduled into the future');
    assertEq(reviewSystem.getDueItems().length, 0, 'no longer due');

    reviewSystem.grade(id, 2); // failure resets
    assertEq(reviewSystem.getAllItems()[0].repetitions, 0, 'failure resets repetition streak');
  } finally {
    if (backup === null) localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, backup);
  }
});

// ---------------- report ----------------

(async () => {
  await Promise.all(pending);

  const passed = results.filter(r => r.ok).length;
  const failed = results.length - passed;
  const ul = document.getElementById('results');
  ul.innerHTML = results.map(r =>
    `<li class="${r.ok ? 'pass' : 'fail'}">${r.ok ? '✓' : '✗'} ${r.name}${r.err ? ` — ${r.err}` : ''}</li>`).join('');
  const sum = document.getElementById('summary');
  sum.textContent = `${passed} passed, ${failed} failed, ${results.length} total`;
  sum.style.color = failed ? '#ff6b6b' : '#3ecf8e';
  console.info(`TESTS: ${passed} passed, ${failed} failed`);
})();
