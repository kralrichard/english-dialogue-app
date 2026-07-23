// Dispatches the 'minigame/:type/:id' route to the right mini-game screen.
import { renderObjectHunt } from './miniGames/objectHuntScreen.js?v=content109';
import { renderWordBuilder } from './miniGames/wordBuilderScreen.js?v=content109';
import { renderSentenceBuilder } from './miniGames/sentenceBuilderScreen.js?v=content109';
import { renderListeningChallenge } from './miniGames/listeningChallengeScreen.js?v=content109';
import { renderMemoryMatch } from './miniGames/memoryMatchScreen.js?v=content109';

const SCREENS = {
  'object-hunt': renderObjectHunt,
  'word-builder': renderWordBuilder,
  'sentence-builder': renderSentenceBuilder,
  'listening-challenge': renderListeningChallenge,
  'memory-match': renderMemoryMatch
};

export function renderMiniGame(container, params) {
  const render = SCREENS[params.type];
  if (!render) {
    container.innerHTML = `<div class="boot-error"><h2>Unknown mini-game</h2><button class="btn" onclick="location.hash='#/'">Home</button></div>`;
    return;
  }
  return render(container, params);
}
