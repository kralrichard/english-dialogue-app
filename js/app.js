// Application bootstrap: validates content, applies persisted accessibility
// settings, registers routes, and starts the router. Content validation
// errors surface as a readable error screen instead of a blank page.

import { registerRoute, startRouter } from './ui/router.js';
import { renderHome } from './ui/screens/homeScreen.js';
import { renderPicker } from './ui/screens/pickerScreen.js';
import { renderDialogue } from './ui/screens/dialogueScreen.js';
import { renderProgress } from './ui/screens/progressScreen.js';
import { renderReview } from './ui/screens/reviewScreen.js';
import { renderSettings } from './ui/screens/settingsScreen.js';
import { renderWorld } from './ui/screens/worldScreen.js';
import { renderEncounter } from './ui/screens/encounterScreen.js';
import { renderMiniGame } from './ui/screens/miniGameRouter.js';
import { renderCharacter } from './ui/screens/characterScreen.js';
import { renderPlacementTest } from './ui/screens/placementTestScreen.js';
import { renderWelcome } from './ui/screens/welcomeScreen.js';
import { renderCharacterCreation } from './ui/screens/characterCreationScreen.js';
import { renderLevelSelect } from './ui/screens/levelSelectScreen.js';
import { renderStoryMap } from './ui/screens/storyMapScreen.js';
import { renderConversation } from './ui/screens/conversationScreen.js';
import { renderBranchMap } from './ui/screens/branchMapScreen.js';
import { renderPhrasePlaces, renderPhraseList } from './ui/screens/quickPracticeScreen.js';
import { settings } from './progress/settingsStore.js';

async function boot() {
  const screen = document.getElementById('screen');

  // Load + validate the dialogue library. createDialogue() throws on
  // malformed content, so a bad content file fails loudly here with the
  // offending dialogue id -- it can never half-render inside a lesson.
  let dialogueCount, scenarioCount = 0;
  try {
    const mod = await import('./data/dialogues/index.js');
    dialogueCount = mod.ALL_DIALOGUES.length;
    if (!dialogueCount) throw new Error('No dialogues registered.');
    // Load + validate the branching Story Mode content. createScenario()
    // throws on a malformed graph, so a bad scenario fails loudly here.
    const story = await import('./data/branching/scenarios/index.js');
    scenarioCount = story.ALL_SCENARIOS.length;
  } catch (e) {
    screen.innerHTML = `
      <div class="boot-error" role="alert">
        <h2>Content failed to load</h2>
        <p style="color:var(--text-dim);margin:0.6rem 0">${String(e.message || e)}</p>
        <p style="color:var(--text-faint);font-size:0.85rem">Fix the dialogue file above and reload.</p>
      </div>`;
    console.error(e);
    return;
  }

  // Apply persisted accessibility settings before first paint.
  document.documentElement.dataset.textsize = settings.get('textSize');
  document.documentElement.dataset.reducedMotion = String(settings.get('reducedMotion'));

  // Bottom navigation. '#/' is now the World screen (map + growing
  // character) -- the game, not a dashboard -- per the product spec. The
  // original dashboard moved to '#/home', unchanged, still reachable from
  // World's "Dashboard" action card.
  document.getElementById('bottom-nav').innerHTML = `
    <a href="#/" data-nav="home"><span class="nav-ico">🗺️</span>World</a>
    <a href="#/story" data-nav="story"><span class="nav-ico">🎭</span>Story</a>
    <a href="#/practice" data-nav="practice"><span class="nav-ico">🎙️</span>Practice</a>
    <a href="#/review" data-nav="review"><span class="nav-ico">🔁</span>Review</a>
    <a href="#/progress" data-nav="progress"><span class="nav-ico">📈</span>Progress</a>`;

  registerRoute('', renderWorld);
  registerRoute('home', renderHome);
  registerRoute('story', renderStoryMap);
  registerRoute('story/:id', renderConversation);
  registerRoute('branchmap/:id', renderBranchMap);
  registerRoute('practice-phrases', renderPhrasePlaces);
  registerRoute('practice-phrases/:placeId', renderPhraseList);
  registerRoute('practice', renderPicker);
  registerRoute('dialogue/:id', renderDialogue);
  registerRoute('progress', renderProgress);
  registerRoute('review', renderReview);
  registerRoute('settings', renderSettings);
  registerRoute('encounter/:locationId', renderEncounter);
  registerRoute('minigame/:type/:id', renderMiniGame);
  registerRoute('character', renderCharacter);
  registerRoute('placement-test', renderPlacementTest);
  registerRoute('welcome', renderWelcome);
  registerRoute('character-creation', renderCharacterCreation);
  registerRoute('level-select', renderLevelSelect);

  // Warm up the speech-synthesis voice list (Chrome loads it async).
  if ('speechSynthesis' in window) window.speechSynthesis.getVoices();

  console.info(`SpeakScenes ready — ${dialogueCount} dialogues loaded.`);
  startRouter();
}

boot();
