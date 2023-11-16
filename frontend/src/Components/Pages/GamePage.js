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

let game;

const GamePage = () => {
  const wikiContent = `<div class="d-flex flex-wrap card-container card-text">
  <div class="card card-color m-3 border-archer">
    <div class="card-header"><h5>The Archer</h5> <img src="${archerLogo}" height= "70px" class="rounded" alt="archer logo"></div>
    <div class="card-body">
      <h5 class="card-title">Stats:</h5>
      <p class="card-text">
        <ul>
            <li>HP: 70</li>
            <li>Range: 8</li>
            <li>Damage: 25</li>
            <li>Attack speed : 1.5s</li>
            <li>Movement speed: 4</li>
            <li>Price: 90 Gold</li>
        </ul>
      </p>
    </div>
    <div class="card-body">
      <h5 class="card-title">Story:</h5>
      <p class="card-text">Lost in the middle of a mysterious forest, a young girl in a red hood stands up against terrifying creatures. Each monster she faces strengthens her resolve, making her a true heroine in this dark world.</p>
    </div>
    <img class="card-img-bottom" src="${archerWiki}" alt="Card image cap">
  </div>


  <div class="card card-color border-bot m-3">
    <div class="card-header"><h5>The exterminator</h5> <img src="${exterminatorLogo}" height= "70px" class="rounded" alt="bot logo"></div>
    <div class="card-body">
      <h5 class="card-title">Stats:</h5>
      <p class="card-text">
        <ul>
              <li>HP: 70</li>
              <li>Range: 8</li>
              <li>Damage: 25</li>
              <li>Attack speed : 1.5s</li>
              <li>Movement speed: 4</li>
              <li>Price: 90 Gold</li>
          </ul>
      </p>
    </div>
    <div class="card-body">
      <h5 class="card-title">Story:</h5>
      <p class="card-text">In the depths of a dark, misty forest, a black robot stands guard. Despite its intimidating appearance, it holds a gun not for malice, but for protection. Its mechanical heart is guided by a virtuous code. Amidst the shadows and fog, it serves as a beacon of justice, a silent protector in the eerie wilderness.</p>
    </div>
    <img class="card-img-bottom" src="${exterminatorWiki}" alt="Card image cap">
  </div>



  <div class="card card-color m-3 border-knight" style="max-width: 18rem; border-width: 3px;">
    <div class="card-header"><h5>The Knight</h5> <img src="${knightLogo}" height= "70px" class="rounded" alt="knight logo"></div>
    <div class="card-body">
      <h5 class="card-title">Stats:</h5>
      <p class="card-text">
        <ul>
              <li>HP: 70</li>
              <li>Range: 8</li>
              <li>Damage: 25</li>
              <li>Attack speed : 1.5s</li>
              <li>Movement speed: 4</li>
              <li>Price: 90 Gold</li>
          </ul>
      </p>
    </div>
    <div class="card-body">
      <h5 class="card-title">Story:</h5>
      <p class="card-text">In the heart of a dark, misty forest, a knight clad in red armor stands tall. His fire longblade glows brightly, casting a warm light in the gloom. His virtuous heart is as strong as his armor, and his courage as fiery as his blade. He is a beacon of hope in this shadowy world, a symbol of valor and honor.</p>
    </div>
    <img class="card-img-bottom" src="${knightWiki}" alt="Card image cap">
  </div>



  <div class="card  card-color m-3 border-necro" style="max-width: 18rem; border-width: 3px;">
    <div class="card-header"><h5>The Necromancer</h5> <img src="${necromancerLogo}" height= "70px" class="rounded" alt="necromancer logo"></div>
    <div class="card-body">
      <h5 class="card-title">Stats:</h5>
      <p class="card-text">
        <ul>
              <li>HP: 70</li>
              <li>Range: 8</li>
              <li>Damage: 25</li>
              <li>Attack speed : 1.5s</li>
              <li>Movement speed: 4</li>
              <li>Price: 90 Gold</li>
          </ul>
      </p>
    </div>
    <div class="card-body">
      <h5 class="card-title">Story:</h5>
      <p class="card-text">Cloaked in black and adorned with a red belt, a necromancer haunts the depths of a foggy forest. His staff, aflame with red fire, illuminates the darkness, while a skull rests in his left hand, a testament to his dark arts. His aura seeps into every corner of the forest, marking him as a malevolent force to be reckoned with. </p>
    </div>
    <img class="card-img-bottom" src="${necromancerWiki}" alt="Card image cap">
  </div>



  <div class="card card-color m-3 border-warrior" style="max-width: 18rem; border-width: 3px;">
    <div class="card-header"><h5>The Warrior</h5> <img src="${warriorLogo}" height= "70px" class="rounded" alt="warrior logo"></div>
    <div class="card-body">
      <h5 class="card-title">Stats:</h5>
      <p class="card-text">
        <ul>
              <li>HP: 50</li>
              <li>Range: 2</li>
              <li>Damage: 40</li>
              <li>Attack speed : 1/s</li>
              <li>Movement speed: 6</li>
              <li>Price: 120 Gold</li>
          </ul>
      </p>
    </div>
    <div class="card-body">
      <h5 class="card-title">Story:</h5>
      <p class="card-text">Emerging from the shadows of a dense, foggy forest is a devil, black as the night itself. His long horns and purple eyes radiate an eerie glow. His purple neon belt and the purple electricity sword in his right hand are a testament to his dark powers. His presence sends chills down the spine of every creature, marking him as the undisputed villain of this realm.</p>
    </div>
    <img class="card-img-bottom" src="${warriorWiki}" alt="Card image cap">
  </div>
</div>`;

  const phaserGame = `
<div id="gameDiv" class="d-flex justify-content-center my-3 border-game">
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
    scene: [StartScene, GameScene, PauseScene, InstructionScene, EndScene],
    //  parent DOM element into which the canvas created by the renderer will be injected.
    parent: 'gameDiv',
  };

  // there could be issues when a game was quit (events no longer working)
  // therefore destroy any started game prior to recreate it
  if (game) game.destroy(true);
  game = new Phaser.Game(config);
};

export default GamePage;
