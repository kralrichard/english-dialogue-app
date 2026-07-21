# SpeakScenes — English Life Adventure

An interactive English-learning **life-simulation game** built on top of SpeakScenes' original two-person spoken-dialogue engine. Your character grows from a baby (A0) learning first words to a confident adult (C2) debating and negotiating — walking through a world map, meeting persistent NPCs, playing mini-games, and speaking real dialogue with an app character whose lines only advance when your spoken sentence is recognized and accepted.

Plain HTML/CSS/JS ES modules — no build step, no dependencies.

## What was built (life-adventure layer)

On top of the original SpeakScenes dialogue app (kept fully intact — see "Original SpeakScenes systems" below), this adds:

- **7-level world/growth system (A0–C2)**, separate from the original A1–C2 dialogue-content levels: `js/data/worldLevels.js`. A0 is a new tier with no dialogue equivalent — it drives tap-based interactions instead.
- **A persistent, growing player avatar** (`js/ui/components/avatarBuilder.js`) with 7 visibly different growth stages and customizable skin tone / hair / outfit / accessories (accessories cost coins — cosmetic only, never pay-to-win).
- **World map** (`js/ui/screens/worldScreen.js`, now the app's landing screen at `#/`) with 10 featured locations (home, hotel, airport, restaurant, café, hospital, pharmacy, taxi, bank, job interview) that unlock either by reaching the required world level or via a mission reward — and an instant "jump to any level" control, honoring the product requirement that a level jump is never permanently blocked.
- **10 persistent NPCs** (`js/data/npcs.js`) layered onto the *existing* dialogue characters (Grace & Daniel at the hotel, Priya at the airport, Elena at the restaurant, Dr. Bennett, Ms. Carter, Marco, Sam, Fatima, Mr. Osei) — no dialogue content was rewritten to add this.
- **Encounter screen** (`js/ui/screens/encounterScreen.js`) that picks the right NPC/dialogue for a location and level, then hands off to the *original, unmodified* dialogue engine/screen.
- **A0 tap-based "Object Hunt" encounters**, driven by a new `TapEngine` (`js/engine/tapEngine.js`) — single-word interactions deliberately don't reuse `DialogueEngine`, which assumes alternating two-role sentence turns.
- **5 real mini-games** (`js/ui/screens/miniGames/`): Object Hunt, Word Builder, Sentence Builder, Listening Challenge, Memory Match. Sentence Builder and Listening Challenge source their content directly from the existing 24 dialogues' real sentences; Object Hunt/Word Builder/Memory Match source a new ~50-word A0/A1 vocabulary catalog (`js/data/vocabulary.js`).
- **Missions** (`js/data/missions.js` + `js/progress/missionEngine.js`): one main mission per featured location plus side missions per mini-game, rewarding XP/coins and sometimes unlocking a location early.
- **A new `worldStore`** (`js/progress/worldStore.js`, key `edapp:world:v1`) holding world level, coins, avatar, unlocked locations, missions completed, and an honestly-separate **measured skill score per level** — a manual level jump changes what's *shown*, never what's claimed to be *mastered* (see the Character screen's "Selected level vs. measured skill" panel).
- **Placement test** (`js/ui/screens/placementTestScreen.js`) — a 7-question, real-content quiz that gives a recommendation only; it never blocks or forces a level choice.
- **First-run onboarding**: Welcome → Character Creation → Level Select (`js/ui/screens/welcomeScreen.js`, `characterCreationScreen.js`, `levelSelectScreen.js`).
- **Vocabulary spaced repetition**: `reviewSystem.js` was extended (additively — existing failed-turn items are untouched) with a `queueVocabItem()`/`kind` field so tapped/missed words share the same SM-2 review queue as failed dialogue sentences.
- **Export/import**: Settings → Data now lets you download all four localStorage keys as one JSON file and restore them later.

### Locations/levels with real content

Only locations with authored dialogues are "featured" on the world map; everything else still shows in Practice → Browse as "Coming soon," matching the app's existing honesty convention. Featured, playable end-to-end: **hotel** (A1, B2), **airport** (A2, B1), **restaurant** (A2, B1), **hospital** (A2), **job interview** (B2), **café** (A1), **taxi** (A1), **pharmacy** (A1), **bank** (B2), **home** (A0 tap-only, no dialogue content).

## Known limitations (read before assuming more content exists)

- **No location has 3+ dialogues at one level** — the richest are hotel/airport/restaurant with 2 dialogues each across *different* levels. Sentence Builder and Listening Challenge substantially extend replay value by drawing on all 24 dialogues' sentences, but the "≥3 conversations per level per location" content depth from the original spec was **not** authored in this pass.
- **A0 has no dialogue content at all** by design — it's 100% Object Hunt. This is a deliberate architectural choice (see `tapEngine.js`'s header comment), not an oversight.
- **B2/C1/C2 locations are thin**: only job-interview and bank have B2 content among the featured set; nothing in the featured set reaches C1/C2 (those levels exist in the original dialogue catalog under `business-meeting` and `debate-topics`, reachable via Practice → Browse, just not wired into a featured world-map node yet).
- **Vocabulary catalog is ~50 words**, covering A0/A1 categories (people, food, animals, actions, greetings, colors, numbers, objects, feelings) — enough for real, non-repetitive mini-game rounds, not an exhaustive dictionary.
- **Only 10 of 32 catalogued locations are "featured"** on the world map; the rest remain reachable only via Practice → Browse all locations.
- **Pronunciation scoring** is unchanged from the original app: real word-accuracy/clarity/fluency from the recognizer, no phoneme-level pronunciation claim (see `js/speech/scorer.js`'s `PronunciationAdapter` — still a no-op integration point for a real backend service).
- Cosmetic accessories are currently 2 items (glasses, bow tie) at a flat 5-coin cost — a minimal proof of the "coins buy cosmetics only" economy, not a full shop.

## Original SpeakScenes systems (unchanged)

## Run it

Speech recognition and the microphone require a **secure context** (localhost or https). `file://` will not work. A zero-dependency PowerShell static server is included:

```powershell
powershell -ExecutionPolicy Bypass -File serve.ps1
# then open http://localhost:8123 in Chrome or Edge
```

**Browser support:** Chrome/Edge give the full experience (Web Speech API for both recognition and voices). Browsers without SpeechRecognition automatically fall back to a clearly labeled **typed practice mode** — never silently.

## Run the tests

Open `http://localhost:8123/tests/` — the suite exercises the real app modules (scorer, engine, schema, review scheduling, tapEngine, worldStore unlock logic, missionEngine, NPC resolution, mission-data integrity) in the browser and reports pass/fail counts. It snapshots and restores every `localStorage` key it touches, so running tests never corrupts your progress. 38 tests, all passing as of this build.

## Architecture

```
index.html, css/styles.css      shell + design system + scene animations
js/app.js                       bootstrap, content validation, routes
js/ui/router.js                 hash router with screen cleanup lifecycle
js/ui/screens/                  home, picker, dialogue, progress, review, settings
                                 + world, encounter, character, placementTest,
                                 welcome, characterCreation, levelSelect, miniGameRouter
js/ui/screens/miniGames/        objectHunt, wordBuilder, sentenceBuilder,
                                 listeningChallenge, memoryMatch
js/ui/components/               scene backgrounds, SVG NPC avatars, mic button,
                                 feedback panel, avatarBuilder (player avatar)
js/engine/dialogueEngine.js     guarded turn-by-turn state machine (sentence dialogues)
js/engine/tapEngine.js          guarded state machine for single-word tap rounds (A0)
js/engine/miniGameScoring.js    shared XP/coin/star formula for mini-games
js/speech/speechRecognizer.js   Web Speech ASR + typed fallback (same event interface)
js/speech/scorer.js             weighted alignment scorer (see honesty notes below)
js/speech/tts.js                SpeechSynthesis wrapper (rate/volume/accent, watchdog)
js/data/                        levels, locations catalog, dialogue schema + content,
                                 worldLevels (A0-C2), vocabulary, npcs, missions, miniGames
js/progress/                    progress store, SM-2 review queue, settings, session resume,
                                 worldStore (world/avatar/coins/unlocks), missionEngine,
                                 exportImport
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
