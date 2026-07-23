// SpeakScenes automated test suite. Runs in the browser (same modules the
// app uses -- no mocked copies). Covers: scorer correctness (contractions,
// negation, numbers, strictness modes, fillers, empty input), dialogue
// engine state transitions and guards, schema validation, and SM-2 review
// scheduling. localStorage keys are snapshotted and restored so running
// tests never corrupts real user progress.

import { scoreAttempt } from '../js/speech/scorer.js';
import { DialogueEngine } from '../js/engine/dialogueEngine.js';
import { validateDialogue, tokenize } from '../js/data/dialogueSchema.js';
import { TapEngine } from '../js/engine/tapEngine.js';

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

test('correct words are accepted even when the recogniser reports low confidence', () => {
  // Chrome often returns a low/absent confidence for perfectly-spoken lines
  // (especially outside en-US). Clarity must never block a correct answer.
  const s = scoreAttempt({
    expected: 'Can I have a medium latte, please?',
    transcript: 'can i have a medium latte please',
    confidence: 0.08, strictness: 'strict'
  });
  assert(s.accepted, `low confidence must not reject a correct answer (clarity ${s.clarity}, accuracy ${s.wordAccuracy})`);
});

test('correct words are accepted even when pace/pauses look bad', () => {
  // durationMs includes thinking time before speaking and the recogniser's
  // silence tail, so a correct short sentence can look very "slow".
  const s = scoreAttempt({
    expected: 'To go, please.',
    transcript: 'to go please',
    timing: { durationMs: 14000, pauseGapsMs: [4000] },
    strictness: 'strict'
  });
  assert(s.accepted, `slow pace must not reject a correct answer (fluency ${s.fluency}, accuracy ${s.wordAccuracy})`);
  assert(typeof s.fluency === 'number' && s.fluency < 60, 'fluency should still be REPORTED as low');
});

test('meaning errors still reject regardless of confidence', () => {
  const s = scoreAttempt({
    expected: 'I can go today.',
    transcript: 'i cannot go today',
    confidence: 0.99, strictness: 'relaxed'
  });
  assert(!s.accepted, 'negation flip must reject even with perfect confidence');
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
  const { ALL_DIALOGUES } = await import('../js/data/dialogues/index.js?v=content110');
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
    const { reviewSystem } = await import('../js/progress/reviewSystem.js?v=content110');
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

// ---------------- tapEngine (A0 tap interactions) ----------------

test('tapEngine: guarded transitions through a full round', () => {
  const items = [{ id: 'a' }, { id: 'b' }];
  const e = new TapEngine(items);
  assertEq(e.state, 'prompt-speaking');
  assertEq(e.submitTap('a'), null, 'cannot tap before awaiting-tap');

  assert(e.promptFinishedSpeaking());
  assertEq(e.state, 'awaiting-tap');
  const r1 = e.submitTap('wrong');
  assert(!r1.correct, 'wrong tap recorded as incorrect');
  assertEq(e.state, 'incorrect');

  assert(e.retry());
  assertEq(e.state, 'awaiting-tap');
  const r2 = e.submitTap('a');
  assert(r2.correct, 'correct tap on retry');
  assertEq(e.state, 'correct');

  assert(e.next());
  assertEq(e.state, 'prompt-speaking');
  assertEq(e.index, 1);
  e.promptFinishedSpeaking();
  e.submitTap('b');
  assert(e.next());
  assertEq(e.state, 'complete');

  const sum = e.getSummary();
  assertEq(sum.totalItems, 2);
  assertEq(sum.correctCount, 2);
  assertEq(sum.accuracy, 100);
});

// ---------------- world/character progression ----------------

function freshWorldState() {
  return {
    onboarded: true, playerName: '', worldLevel: 'A0', coins: 0,
    avatar: { skinTone: '#e0aa7e', hairStyle: 'short', hairColor: '#4a2f1d', outfitId: 'default', accessoryIds: [] },
    unlockedLocationIds: ['home'],
    skillScores: { A0: null, A1: null, A2: null, B1: null, B2: null, C1: null, C2: null },
    completedMissionIds: [], placementTest: { taken: false, recommendedLevel: null, takenAt: null }, mapVisited: []
  };
}
function freshProgressState() {
  return { xp: 0, streak: { current: 0, longest: 0, lastActiveDate: null }, speakingTimeLog: {}, completedDialogues: [], wordStats: {}, favorites: [], achievements: [], hadPerfectTurn: false, cefrLevel: 'A1' };
}

test('world: isLocationUnlocked honors manual unlock and level threshold', async () => {
  const WKEY = 'edapp:world:v1', PKEY = 'edapp:progress:v1';
  const wBackup = localStorage.getItem(WKEY);
  const pBackup = localStorage.getItem(PKEY);
  try {
    localStorage.removeItem(WKEY);
    localStorage.removeItem(PKEY);
    const { worldStore, isLocationUnlocked } = await import('../js/progress/worldStore.js?v=content110');
    const { progressStore } = await import('../js/progress/progressStore.js?v=content110');
    worldStore.state = freshWorldState();
    progressStore.state = freshProgressState();

    // NOTHING IS LOCKED: every real location is reachable from a fresh state,
    // featured or not, regardless of world level. minWorldLevel is only a
    // recommendation used for ordering and the badge on the map.
    assert(isLocationUnlocked('home'), 'home is reachable');
    assert(isLocationUnlocked('hotel'), 'featured location is reachable');
    assert(isLocationUnlocked('seaside'), 'non-featured location is reachable too');
    // Only a location that does not exist is refused.
    assert(!isLocationUnlocked('definitely-not-a-place'), 'unknown ids are still refused');
    // Every catalogued location is reachable — no exceptions.
    const { LOCATIONS } = await import('../js/data/locations.js?v=content110');
    const locked = LOCATIONS.filter(l => !isLocationUnlocked(l.id)).map(l => l.id);
    assertEq(locked.length, 0, `these locations are still locked: ${locked.join(', ')}`);
  } finally {
    if (wBackup === null) localStorage.removeItem(WKEY); else localStorage.setItem(WKEY, wBackup);
    if (pBackup === null) localStorage.removeItem(PKEY); else localStorage.setItem(PKEY, pBackup);
  }
});

test('missionEngine: completing a dialogue awards its mission exactly once', async () => {
  const WKEY = 'edapp:world:v1', PKEY = 'edapp:progress:v1';
  const wBackup = localStorage.getItem(WKEY);
  const pBackup = localStorage.getItem(PKEY);
  try {
    localStorage.removeItem(WKEY);
    localStorage.removeItem(PKEY);
    const { worldStore } = await import('../js/progress/worldStore.js?v=content110');
    const { progressStore } = await import('../js/progress/progressStore.js?v=content110');
    const { checkMissionsForDialogue } = await import('../js/progress/missionEngine.js?v=content110');
    worldStore.state = freshWorldState();
    progressStore.state = freshProgressState();

    const dlg = { id: 'hotel-check-in-a1-01', locationId: 'hotel' };
    const coinsBefore = worldStore.getState().coins;
    const newly = checkMissionsForDialogue(dlg, { accuracy: 90 });
    assert(newly.some(m => m.id === 'main-hotel'), 'main-hotel mission triggers on its dialogue id');
    assert(worldStore.getState().coins > coinsBefore, 'coins awarded');
    assert(worldStore.getState().unlockedLocationIds.includes('airport'), 'mission reward unlocks airport early');
    assert(progressStore.state.xp > 0, 'mission XP is added to the same progressStore XP/level used elsewhere');

    const again = checkMissionsForDialogue(dlg, { accuracy: 90 });
    assertEq(again.length, 0, 'mission does not re-trigger once completed');
  } finally {
    if (wBackup === null) localStorage.removeItem(WKEY); else localStorage.setItem(WKEY, wBackup);
    if (pBackup === null) localStorage.removeItem(PKEY); else localStorage.setItem(PKEY, pBackup);
  }
});

test('review: vocab items queue and grade alongside dialogue-turn items', async () => {
  const KEY = 'edapp:review:v1';
  const backup = localStorage.getItem(KEY);
  try {
    localStorage.removeItem(KEY);
    const { reviewSystem } = await import('../js/progress/reviewSystem.js?v=content110');
    reviewSystem.state = { items: [] };
    reviewSystem.queueVocabItem({ id: 'cat', word: 'cat', translation_tr: 'kedi' });
    reviewSystem.queueVocabItem({ id: 'cat', word: 'cat', translation_tr: 'kedi' }); // idempotent
    assertEq(reviewSystem.getAllItems().length, 1, 'no duplicate vocab entries');

    const item = reviewSystem.getAllItems()[0];
    assertEq(reviewSystem.getKind(item), 'vocab');
    assertEq(item.expected, 'cat');
    reviewSystem.grade(item.id, 5);
    assertEq(reviewSystem.getDueItems().length, 0, 'graded vocab item is scheduled forward like a turn item');

    reviewSystem.state.items.push({ id: 'legacy::0', dialogueId: 'x', dueDate: new Date().toISOString(), expected: 'Hi.' });
    assertEq(reviewSystem.getKind(reviewSystem.state.items[1]), 'turn', 'items with no kind field default to turn');
  } finally {
    if (backup === null) localStorage.removeItem(KEY);
    else localStorage.setItem(KEY, backup);
  }
});

test('npcs: getNpcForDialogue resolves every shipped dialogue', async () => {
  const { ALL_DIALOGUES } = await import('../js/data/dialogues/index.js?v=content110');
  const { getNpcForDialogue } = await import('../js/data/npcs.js?v=content110');
  for (const d of ALL_DIALOGUES) {
    const npc = getNpcForDialogue(d);
    assert(npc && npc.name === d.characters.A.name, `${d.id}: NPC name should match characters.A.name`);
    assert(npc.avatarPreset, `${d.id}: NPC missing avatarPreset`);
  }
});

test('locations: featured locations have a valid minWorldLevel', async () => {
  const { LOCATIONS } = await import('../js/data/locations.js?v=content110');
  const { WORLD_LEVEL_CODES } = await import('../js/data/worldLevels.js?v=content110');
  for (const loc of LOCATIONS.filter(l => l.featured)) {
    assert(WORLD_LEVEL_CODES.includes(loc.minWorldLevel), `${loc.id}: invalid minWorldLevel "${loc.minWorldLevel}"`);
  }
});

test('missions: every completeDialogue requirement references a real dialogue id', async () => {
  const { ALL_DIALOGUES } = await import('../js/data/dialogues/index.js?v=content110');
  const { MISSIONS } = await import('../js/data/missions.js?v=content110');
  const ids = new Set(ALL_DIALOGUES.map(d => d.id));
  for (const m of MISSIONS) {
    for (const req of m.requirements) {
      if (req.type === 'completeDialogue') assert(ids.has(req.dialogueId), `${m.id}: references missing dialogue id "${req.dialogueId}"`);
    }
  }
});

// ---------------- Story Mode: branching engine, schema, store ----------------

test('scenarios: every scenario passes schema validation at import', async () => {
  const { ALL_SCENARIOS } = await import('../js/data/branching/scenarios/index.js?v=content110');
  assert(ALL_SCENARIOS.length >= 12, `expected >= 12 scenarios, got ${ALL_SCENARIOS.length}`);
});

test('scenarios: every choice.next and node.next targets a real node or ending', async () => {
  const { ALL_SCENARIOS } = await import('../js/data/branching/scenarios/index.js?v=content110');
  for (const s of ALL_SCENARIOS) {
    const isTarget = (id) => s.nodes[id] || s.endings[id];
    for (const node of Object.values(s.nodes)) {
      if (node.next) assert(isTarget(node.next), `${s.id}:${node.id}.next -> "${node.next}" missing`);
      if (node.endingId) assert(s.endings[node.endingId], `${s.id}:${node.id}.endingId missing`);
      (node.choices || []).forEach(c => assert(isTarget(c.next), `${s.id}:${node.id}:${c.id}.next -> "${c.next}" missing`));
    }
  }
});

test('scenarios: every decision node offers at least 2 choices', async () => {
  const { ALL_SCENARIOS } = await import('../js/data/branching/scenarios/index.js?v=content110');
  for (const s of ALL_SCENARIOS) {
    for (const node of Object.values(s.nodes)) {
      if (node.choices) assert(node.choices.length >= 2, `${s.id}:${node.id} has < 2 choices`);
    }
  }
});

test('scenarios: every ending is reachable from the start node', async () => {
  const { ALL_SCENARIOS } = await import('../js/data/branching/scenarios/index.js?v=content110');
  for (const s of ALL_SCENARIOS) {
    const reached = new Set();
    const seenNodes = new Set();
    const stack = [s.startNodeId];
    while (stack.length) {
      const id = stack.pop();
      if (s.endings[id]) { reached.add(id); continue; }
      if (seenNodes.has(id) || !s.nodes[id]) continue;
      seenNodes.add(id);
      const n = s.nodes[id];
      if (n.endingId) reached.add(n.endingId);
      if (n.next) stack.push(n.next);
      (n.choices || []).forEach(c => stack.push(c.next));
    }
    for (const eid of Object.keys(s.endings)) assert(reached.has(eid), `${s.id}: ending "${eid}" is unreachable`);
  }
});

test('branchEngine: different choices lead to different next nodes', async () => {
  const { BranchEngine } = await import('../js/engine/branchEngine.js?v=content110');
  const { getScenario } = await import('../js/data/branching/scenarios/index.js?v=content110');
  const s = getScenario('hotel-checkin');
  const e1 = new BranchEngine(s);
  const start = e1.currentNode();
  assert(start.choices.length >= 2, 'start should be a decision point');
  const a = new BranchEngine(s);
  const b = new BranchEngine(s);
  const resA = a.commitChoice(start.choices[0].id);
  const resB = b.commitChoice(start.choices[1].id);
  const nodeA = resA.node ? resA.node.id : (resA.ending && resA.ending.id);
  const nodeB = resB.node ? resB.node.id : (resB.ending && resB.ending.id);
  assert(nodeA !== nodeB, `two choices led to the same place: ${nodeA}`);
});

test('branchEngine: back() returns to a previous decision, keeping explored marks', async () => {
  const { BranchEngine } = await import('../js/engine/branchEngine.js?v=content110');
  const { getScenario } = await import('../js/data/branching/scenarios/index.js?v=content110');
  const e = new BranchEngine(getScenario('hotel-checkin'));
  const startId = e.currentNodeId;
  const firstChoice = e.currentNode().choices[0].id;
  e.commitChoice(firstChoice);
  assert(e.currentNodeId !== startId || e.isAtEnding(), 'engine should have advanced');
  const ok = e.back();
  assert(ok, 'back() should succeed');
  assert(e.currentNodeId === startId, `back should return to "${startId}", got "${e.currentNodeId}"`);
  assert(e.choiceStatus(startId, firstChoice) === 'attempted', 'explored mark should survive rewind');
});

test('branchEngine: commitChoice throws when not at a decision point (guard)', async () => {
  const { BranchEngine } = await import('../js/engine/branchEngine.js?v=content110');
  const { getScenario } = await import('../js/data/branching/scenarios/index.js?v=content110');
  const e = new BranchEngine(getScenario('airport-checkin'));
  // walk to an ending, then committing again must throw
  let guard = 0;
  while (!e.isAtEnding() && guard++ < 50) {
    const n = e.currentNode();
    if (n && n.choices) e.commitChoice(n.choices[0].id); else break;
  }
  let threw = false;
  try { e.commitChoice('anything'); } catch { threw = true; }
  assert(threw, 'commitChoice at an ending should throw');
});

test('storyStore: XP is full first time then reduced practice XP (anti-farm)', async () => {
  const { storyStore } = await import('../js/progress/storyStore.js?v=content110');
  const { getScenario } = await import('../js/data/branching/scenarios/index.js?v=content110');
  const STORY_KEY = 'edapp:story:v1';
  const s = getScenario('meeting-friend');
  const node = s.nodes[s.startNodeId];
  const choice = node.choices[0];
  // snapshot both in-memory state AND localStorage so the test is isolated
  // even across repeated runs (completeChoice persists to localStorage).
  const memSnapshot = JSON.stringify(storyStore.getState());
  const lsSnapshot = localStorage.getItem(STORY_KEY);
  try {
    // ensure a clean slate for THIS choice regardless of prior runs/play
    const recKey = storyStore.choiceKey(s.id, node.id, choice.id);
    delete storyStore.state.choiceRecords[recKey];
    const sc = storyStore.state.scenarios[s.id];
    if (sc) sc.completedChoices = sc.completedChoices.filter(k => k !== `${node.id}::${choice.id}`);

    const first = storyStore.completeChoice(s, node, choice, { overallScore: 50 });
    const second = storyStore.completeChoice(s, node, choice, { overallScore: 50 });
    assert(first === (choice.xp || 10), `first award should be full (${choice.xp}), got ${first}`);
    assert(second < first, `replay XP (${second}) should be less than first (${first})`);
  } finally {
    Object.assign(storyStore.state, JSON.parse(memSnapshot));
    if (lsSnapshot === null) localStorage.removeItem(STORY_KEY);
    else localStorage.setItem(STORY_KEY, lsSnapshot);
  }
});

test('storyStore: relationship tier rises with positive effects', async () => {
  const { relationshipTier } = await import('../js/progress/storyStore.js?v=content110');
  assert(relationshipTier(0).id === 'stranger', 'zero should be stranger');
  assert(relationshipTier(8).id === 'friend', '8 should be friend');
  assert(relationshipTier(20).id === 'trusted', '20 should be trusted');
});

test('vocabulary: lookupWord finds a known word and falls back gracefully', async () => {
  const { lookupWord } = await import('../js/data/branching/vocabulary.js?v=content110');
  assert(lookupWord('reservation').tr === 'rezervasyon', 'should find reservation');
  assert(lookupWord('Reservation,').tr === 'rezervasyon', 'should strip punctuation/case');
  const miss = lookupWord('zxqwv');
  assert(miss && miss.tr === null, 'unknown word should return a safe fallback');
});

test('phrasebook: has at least 200 unique, well-formed entries', async () => {
  const { PHRASEBOOK, PHRASE_PLACES } = await import('../js/data/branching/phrasebook.js?v=content110');
  assert(PHRASEBOOK.length >= 200, `expected >= 200 phrases, got ${PHRASEBOOK.length}`);
  const ids = new Set();
  const levels = new Set(['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
  for (const p of PHRASEBOOK) {
    assert(p.en && p.tr, `phrase ${p.id} missing en/tr`);
    assert(levels.has(p.level), `phrase ${p.id} bad level "${p.level}"`);
    assert(PHRASE_PLACES[p.locationId], `phrase ${p.id} unknown place "${p.locationId}"`);
    assert(!ids.has(p.id), `duplicate phrase id "${p.id}"`);
    ids.add(p.id);
  }
});

test('phrasebook: an equivalent typed answer is accepted by the scorer', async () => {
  const { PHRASEBOOK } = await import('../js/data/branching/phrasebook.js?v=content110');
  const p = PHRASEBOOK.find(x => x.en === 'I have a reservation.');
  assert(p, 'expected the hotel reservation phrase to exist');
  const s = scoreAttempt({ expected: p.en, transcript: 'i have a reservation', strictness: 'relaxed' });
  assert(s.accepted, `should accept, accuracy ${s.wordAccuracy}`);
});

// ---------------- shorts sentence bank + growth ----------------

test('shorts bank: at least 10,000 graded sentences', async () => {
  const { buildShortsBank, shortsCount } = await import('../js/data/shorts/sentenceBank.js?v=content110');
  const bank = buildShortsBank();
  assert(bank.length >= 10000, `expected >= 10000 sentences, got ${bank.length}`);
  assertEq(shortsCount(), bank.length, 'shortsCount() should match bank length');
});

test('shorts bank: every entry well-formed (en + tr + valid level + unique id)', async () => {
  const { buildShortsBank } = await import('../js/data/shorts/sentenceBank.js?v=content110');
  const bank = buildShortsBank();
  const levels = new Set(['A0', 'A1', 'A2', 'B1', 'B2', 'C1', 'C2']);
  const ids = new Set();
  for (const s of bank) {
    assert(s.en && s.en.trim(), `entry ${s.id} has empty en`);
    assert(s.tr && s.tr.trim(), `entry ${s.id} has empty tr`);
    assert(!/undefined|NaN/.test(s.en + s.tr), `entry ${s.id} has a template hole: "${s.en}" / "${s.tr}"`);
    assert(levels.has(s.level), `entry ${s.id} bad level "${s.level}"`);
    assert(!ids.has(s.id), `duplicate id "${s.id}"`);
    ids.add(s.id);
  }
});

// The growth pace and the content depth must agree: while the learner is in a
// life stage the feed shows only that level's sentences, so each level needs
// at least as many sentences as its stage lasts in swipes -- otherwise cards
// start repeating before the character grows up.
test('shorts: content depth covers the growth pace at every level', async () => {
  const { sentencesForLevel, LEVEL_ORDER } = await import('../js/data/shorts/sentenceBank.js?v=content110');
  const { GROWTH_THRESHOLDS } = await import('../js/progress/shortsStore.js?v=content110');
  for (let i = 0; i < LEVEL_ORDER.length; i++) {
    const level = LEVEL_ORDER[i];
    const span = i < GROWTH_THRESHOLDS.length - 1
      ? GROWTH_THRESHOLDS[i + 1] - GROWTH_THRESHOLDS[i]
      : 1500; // C2 is terminal -- keep a healthy reserve
    const have = sentencesForLevel(level).length;
    assert(have >= span, `${level}: ${have} sentences for a ${span}-swipe stage (would repeat)`);
  }
});

test('shorts bank: sorted A0->C2 with every level populated', async () => {
  const { buildShortsBank, levelBands, LEVEL_ORDER } = await import('../js/data/shorts/sentenceBank.js?v=content110');
  const bank = buildShortsBank();
  const rank = c => LEVEL_ORDER.indexOf(c);
  for (let i = 1; i < bank.length; i++) {
    assert(rank(bank[i].level) >= rank(bank[i - 1].level), `not sorted at ${i}: ${bank[i - 1].level} then ${bank[i].level}`);
  }
  const bands = levelBands();
  for (const lv of LEVEL_ORDER) {
    assert(bands[lv].count > 0, `level ${lv} has no sentences`);
  }
});

test('shorts feed: shortForLevel wraps its cursor around', async () => {
  const { shortForLevel, sentencesForLevel } = await import('../js/data/shorts/sentenceBank.js?v=content110');
  const n = sentencesForLevel('C2').length;
  assert(n > 0, 'C2 should have sentences');
  assertEq(shortForLevel('C2', 0).id, shortForLevel('C2', n).id, 'cursor should wrap');
});

test('shorts bank: a sample sentence is accepted verbatim by the scorer', async () => {
  const { sentencesForLevel } = await import('../js/data/shorts/sentenceBank.js?v=content110');
  const s = sentencesForLevel('A1').find(x => /^This is /.test(x.en));
  assert(s, 'expected an A1 "This is ..." sentence');
  const r = scoreAttempt({ expected: s.en, transcript: s.en.replace(/[.?!]/g, '').toLowerCase(), strictness: 'relaxed' });
  assert(r.accepted, `should accept exact answer for "${s.en}", accuracy ${r.wordAccuracy}`);
});

test('shorts growth: stage index tracks the swipe thresholds', async () => {
  const { shortsStore, GROWTH_THRESHOLDS } = await import('../js/progress/shortsStore.js?v=content110');
  const st = shortsStore.getState();
  const orig = st.swipes;                 // mutate in-memory only; never _save()
  st.swipes = 0; assertEq(shortsStore.stageIndex(), 0, 'start = A0');
  st.swipes = GROWTH_THRESHOLDS[1]; assertEq(shortsStore.stageIndex(), 1, 'A1 at threshold[1]');
  st.swipes = GROWTH_THRESHOLDS[1] - 1; assertEq(shortsStore.stageIndex(), 0, 'still A0 just before');
  st.swipes = GROWTH_THRESHOLDS[6]; assertEq(shortsStore.stageIndex(), 6, 'C2 at threshold[6]');
  st.swipes = GROWTH_THRESHOLDS[6] + 999; assertEq(shortsStore.stageIndex(), 6, 'never past the last stage');
  st.swipes = 0; assertEq(shortsStore.currentLevel(), 'A0', 'currentLevel maps index 0 -> A0');
  st.swipes = orig;
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
