import Phaser from 'phaser';
import StartScene from '../Game/StartScene';
import GameScene from '../Game/GameScene';
import PauseScene from '../Game/PauseScene';
import InstructionScene from '../Game/InstructionScene';

import archerLogo from '../../assets/archerCard.png';
import exterminatorLogo from '../../assets/botCard.png';
import knightLogo from '../../assets/knightCard.png';
import necromancerLogo from '../../assets/necromancerCard.png';
import warriorLogo from '../../assets/warriorCard.png';

import archerWiki from '../../assets/artwork_wiki/archerWiki.png';
import exterminatorWiki from '../../assets/artwork_wiki/exterminatorWiki.png';
import knightWiki from '../../assets/artwork_wiki/knightWiki.png';
import necromancerWiki from '../../assets/artwork_wiki/necromancerWiki.png';
import warriorWiki from '../../assets/artwork_wiki/warriorWiki.png';
import EndScene from '../Game/EndScene';
import { clearPage } from '../../utils/render';

import Archer from '../Game/Units/Archer';
import Exterminator from '../Game/Units/Exterminator';
import Knight from '../Game/Units/Knight';
import Necro from '../Game/Units/Necro';
import Warrior from '../Game/Units/Warrior';

import {initializeGdpr} from '../../utils/gdprUtils';

let game;

const GamePage = () => {

  clearPage();

  const archerStats = Archer.getStats();
  const exterminatorStats = Exterminator.getStats();
  const knightStats = Knight.getStats();
  const necroStats = Necro.getStats();
  const warriorStats = Warrior.getStats();

  const wikiContent = `<div class="d-flex flex-wrap card-container card-text">
  <div class="card card-color m-3 border-archer">
    <div class="card-header"><h5>The Archer</h5> <img src="${archerLogo}" height= "70px" class="rounded" alt="archer logo"></div>
    <div class="card-body">
      <h5 class="card-title">Stats:</h5>
      <p class="card-text">
        <ul>
            <li>Health: ${archerStats.health} hp.</li>
            <li>Range: ${archerStats.range} units.</li>
            <li>Damage: ${archerStats.damage} ad.</li>
            <li>Movement speed: ${archerStats.speed} ms.</li>
            <li>Price: ${archerStats.price} gold.</li>
        </ul>
      </p>
    </div>
    <img class="card-img-bottom" src="${archerWiki}" alt="Card image cap">
  </div>
  <div class="card card-color border-bot m-3">
    <div class="card-header"><h5>The exterminator</h5> <img src="${exterminatorLogo}" height= "70px" class="rounded" alt="bot logo"></div>
    <div class="card-body">
      <h5 class="card-title">Stats:</h5>
      <p class="card-text">
      <ul>
        <li>Health: ${exterminatorStats.health} hp.</li>
        <li>Range: ${exterminatorStats.range} units.</li>
        <li>Damage: ${exterminatorStats.damage} ad.</li>
        <li>Movement speed: ${exterminatorStats.speed} ms.</li>
        <li>Price: ${exterminatorStats.price} gold.</li>
      </ul>
      </p>
    </div>
    <img class="card-img-bottom" src="${exterminatorWiki}" alt="Card image cap">
  </div>
  <div class="card card-color m-3 border-knight" style="max-width: 18rem; border-width: 3px;">
    <div class="card-header"><h5>The Knight</h5> <img src="${knightLogo}" height= "70px" class="rounded" alt="knight logo"></div>
    <div class="card-body">
      <h5 class="card-title">Stats:</h5>
      <p class="card-text">
        <ul>
          <li>Health: ${knightStats.health} hp.</li>
          <li>Range: ${knightStats.range} units.</li>
          <li>Damage: ${knightStats.damage} ad.</li>
          <li>Movement speed: ${knightStats.speed} ms.</li>
          <li>Price: ${knightStats.price} gold.</li>
        </ul>
      </p>
    </div>
    <img class="card-img-bottom" src="${knightWiki}" alt="Card image cap">
  </div>
  <div class="card  card-color m-3 border-necro" style="max-width: 18rem; border-width: 3px;">
    <div class="card-header"><h5>The Necromancer</h5> <img src="${necromancerLogo}" height= "70px" class="rounded" alt="necromancer logo"></div>
    <div class="card-body">
      <h5 class="card-title">Stats:</h5>
      <p class="card-text">
        <ul>
          <li>Health: ${necroStats.health} hp.</li>
          <li>Range: ${necroStats.range} units.</li>
          <li>Damage: ${necroStats.damage} ad.</li>
          <li>Movement speed: ${necroStats.speed} ms.</li>
          <li>Price: ${necroStats.price} gold.</li>
        </ul>
      </p>
    </div>
    <img class="card-img-bottom" src="${necromancerWiki}" alt="Card image cap">
  </div>
  <div class="card card-color m-3 border-warrior" style="max-width: 18rem; border-width: 3px;">
    <div class="card-header"><h5>The Warrior</h5> <img src="${warriorLogo}" height= "70px" class="rounded" alt="warrior logo"></div>
    <div class="card-body">
      <h5 class="card-title">Stats:</h5>
      <p class="card-text">
        <ul>
          <li>Health: ${warriorStats.health} hp.</li>
          <li>Range: ${warriorStats.range} units.</li>
          <li>Damage: ${warriorStats.damage} ad.</li>
          <li>Movement speed: ${warriorStats.speed} ms.</li>
          <li>Price: ${warriorStats.price} gold.</li>
        </ul>
      </p>
    </div>
    <img class="card-img-bottom" src="${warriorWiki}" alt="Card image cap">
  </div>
</div>`;

  const phaserGame = `
<div id="gameDiv" class="d-flex justify-content-center py-3 border-game">
</div>`;

  const divBackground = document.createElement('div');
  divBackground.className = 'mainColor';
  divBackground.innerHTML = phaserGame + wikiContent;
  divBackground.id = 'containerGdpr';

  setTimeout(() => {
    initializeGdpr('#containerGdpr');
   }, 0);

  const main = document.querySelector('main');
  main.appendChild(divBackground);

  const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false,
      },
    },
    scene: [StartScene, GameScene, PauseScene, InstructionScene, EndScene],
    //  parent DOM element into which the canvas created by the renderer will be injected.
    parent: 'gameDiv',
  };

  // there could be issues when a game was quit (events no longer working)
  // therefore destroy any started game prior to recreate it
  if (game) game.destroy(true);
  game = new Phaser.Game(config);
  game.scene.start('GameScene');
};

export default GamePage;
