import Phaser from 'phaser';
import StartScene from '../Game/StartScene';
import GameScene from '../Game/GameScene';
import PauseScene from '../Game/PauseScene';

import archerLogo from '../../assets/archerCard.png';
import botLogo from '../../assets/botCard.png';
import knightLogo from '../../assets/knightCard.png';
import necromancerLogo from '../../assets/necromancerCard.png';
import warriorLogo from '../../assets/warriorCard.png';

import archerWiki from '../../assets/artwork_wiki/archerWiki.png';

let game;

const GamePage = () => {
  const wikiContent = `<div class="d-flex flex-wrap card-container">
  <div class="card text-white bg-success m-3 border-danger" style="max-width: 18rem; border-width: 3px;">
    <div class="card-header"><h5>The Archer</h5> <img src="${archerLogo}" height= "70px" class="rounded" alt="archer logo"></div>
    <div class="card-body">
      <h5 class="card-title">Stats:</h5>
      <p class="card-text">~Write stats here~</p>
    </div>
    <img class="card-img-bottom" src="${archerWiki}" alt="Card image cap">
  </div>
  <div class="card text-white bg-success m-3 border-light" style="max-width: 18rem; border-width: 3px;">
    <div class="card-header"><h5>The Bot</h5> <img src="${botLogo}" height= "70px" class="rounded" alt="bot logo"></div>
    <div class="card-body">
      <h5 class="card-title">Stats:</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  <div class="card text-white bg-success m-3 border-warning" style="max-width: 18rem; border-width: 3px;">
    <div class="card-header"><h5>The Knight</h5> <img src="${knightLogo}" height= "70px" class="rounded" alt="knight logo"></div>
    <div class="card-body">
      <h5 class="card-title">Stats:</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  <div class="card text-white bg-success m-3 border-dark" style="max-width: 18rem; border-width: 3px;">
    <div class="card-header"><h5>The Necromancer</h5> <img src="${necromancerLogo}" height= "70px" class="rounded" alt="necromancer logo"></div>
    <div class="card-body">
      <h5 class="card-title">Stats:</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
  <div class="card text-white bg-success m-3 border-primary" style="max-width: 18rem; border-width: 3px;">
    <div class="card-header"><h5>The Warrior</h5> <img src="${warriorLogo}" height= "70px" class="rounded" alt="warrior logo"></div>
    <div class="card-body">
      <h5 class="card-title">Stats:</h5>
      <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    </div>
  </div>
</div>`;

  const phaserGame = `
<div id="gameDiv" class="d-flex justify-content-center my-3">
</div>`;

  const main = document.querySelector('main');
  main.innerHTML = phaserGame + wikiContent;

  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 300 },
        debug: false,
      },
    },
    scene: [StartScene,GameScene,PauseScene],
    //  parent DOM element into which the canvas created by the renderer will be injected.
    parent: 'gameDiv',
  };

  // there could be issues when a game was quit (events no longer working)
  // therefore destroy any started game prior to recreate it
  if (game) game.destroy(true);
  game = new Phaser.Game(config);
};

export default GamePage;
