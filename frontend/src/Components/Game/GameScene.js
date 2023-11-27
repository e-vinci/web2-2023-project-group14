/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import Phaser from 'phaser';
import music from '../../assets/audio/theme_musics/C418 - Aria Math.mp3';
import soundOnAsset from '../../assets/soundOn.png';
import soundOffAsset from '../../assets/soundOff.png';
import backgroundGameAsset from '../../assets/background.png';
import hudAsset from '../../assets/armadaHUD.png';
import { createCards, preloadCards } from './CardCreator';
import Player from './Player';
import baseSpriteSheet from '../../assets/playerBase.png';
import PlayerBase, { createPlayerBase, preloadPlayerBase } from './PlayerBase';
import MobP1Ex from '../../assets/mobPlayer1Ex.png';
import {preloadSpriteSheets, createArcherAnim, createNecroAnim, createKnightAnim, createWarriorAnim, createEXTAnim} from './Animations'
import Archer from './Units/Archer';
import Exterminator from './Units/Exterminator';
import Knight from './Units/Knight';
import Necro from './Units/Necro';
import Warrior from './Units/Warrior';



// All the key 
const KNIGHT_KEY = 'knight';

// Variables here
let cursors;
let player1CharactersGroup;
let player2CharactersGroup;
// eslint-disable-next-line prefer-const, import/no-mutable-exports
export  let team1=[];
// eslint-disable-next-line prefer-const, import/no-mutable-exports
export  let team2=[];

class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene');
    this.soundOn = true;
    this.soundButton = undefined;
    this.player1 = undefined;
    this.player2 = undefined;
    this.player1 = new Player('player1');
    this.player2 = new Player('player2');
    this.base1 = undefined;
    this.base2 = undefined;
    this.cursors = undefined;
    this.player1CharactersGroup = undefined;
    this.player2CharactersGroup = undefined;
    this.cardsP1=[];
    this.indexP1=0;
    this.cardsP2=[];
    this.indexP2=0;
    
    
    // this.KnightSpawn = undefined;
  }

  preload() {
    // TEST FOR EXEMPLE DONT DELETE THIS
    this.load.image('KNIGHT_KEY', MobP1Ex)
    // thx
    this.load.image('backgroundGame', backgroundGameAsset);
    this.load.image('hud', hudAsset);
    this.load.image('soundOn', soundOnAsset);
    this.load.image('soundOff', soundOffAsset);
    this.load.audio('theme', music);
    
    // preloading SpriteSheets
    preloadSpriteSheets(this);
    // preloading cards assets
    preloadCards(this);

    preloadPlayerBase(this);
   
  }

  create() {
    this.debugShowBody = true;

    // fonction pour choisir cartes a gauche P1
    this.input.keyboard.on('keydown-Q', (event) => {
      // Réduisez l'échelle de la carte précédemment sélectionnée
    this.cardsP1[this.indexP1].setScale(0.38);
  
      // Mettez à jour l'index de la carte sélectionnée
    this.indexP1--;
      if (this.indexP1 < 0) {
        this.indexP1 = this.cardsP1.length - 1; // Boucle vers la fin si nous sommes au début
      }
        // Mettez en évidence la nouvelle carte sélectionnée
    this.cardsP1[this.indexP1].setScale(0.45);
  });




    
  // fonction pour choisir cartes a droite P1
  this.input.keyboard.on('keydown-D', (event) => {
    // Réduisez l'échelle de la carte précédemment sélectionnée
    this.cardsP1[this.indexP1].setScale(0.38);

    // Mettez à jour l'index de la carte sélectionnée
    this.indexP1++;
    if (this.indexP1 >= this.cardsP1.length) {
      this.indexP1 = 0; // Boucle vers le début si nous sommes à la fin
    }

    // Mettez en évidence la nouvelle carte sélectionnée
    this.cardsP1[this.indexP1].setScale(0.45);
});
  






function addWarriorP1(indexP1, scene, team) {
  switch(indexP1) {
    case 0:
      team1.push(new Archer(scene,100,200));
      break;
    case 1:
      team1.push(new Exterminator());
      break;
    case 2:
      team1.push(new Knight());
      break;
    case 3:
      team1.push(new Necro());
      break;
    case 4:
      team1.push(new Warrior());
      break;
    default:
      console.log(team1);
  }
}
// Spawn warriors
function spawnWarriors1() {
  for(let i = 0; i < team1.length; i++) {
    team1[i].spawn();
  }
}


// fonction pour choisir cartes a gauche P2
this.input.keyboard.on('keydown-LEFT', (event) => {
  // Réduisez l'échelle de la carte précédemment sélectionnée pour le joueur 2
  this.cardsP2[this.indexP2].setScale(0.38);

  // Mettez à jour l'index de la carte sélectionnée pour le joueur 2
  this.indexP2--;
  if (this.indexP2 < 0) {
    this.indexP2 = this.cardsP2.length - 1; // Boucle vers la fin si nous sommes au début
  }

  // Mettez en évidence la nouvelle carte sélectionnée pour le joueur 2
  this.cardsP2[this.indexP2].setScale(0.45);
});
  
// fonction pour choisir cartes a droite P2
this.input.keyboard.on('keydown-RIGHT', (event) => {
  // Réduisez l'échelle de la carte précédemment sélectionnée pour le joueur 2
  this.cardsP2[this.indexP2].setScale(0.38);

  // Mettez à jour l'index de la carte sélectionnée pour le joueur 2
  this.indexP2++;
  if (this.indexP2 >= this.cardsP2.length) {
    this.indexP2 = 0; // Boucle vers le début si nous sommes à la fin
  }

  // Mettez en évidence la nouvelle carte sélectionnée pour le joueur 2
  this.cardsP2[this.indexP2].setScale(0.45);
});








function addWarriorP2(indexP2, scene, team) {
  switch(indexP2) {
    case 0:
      team2.push(new Archer(scene, 500, 400));
      break;
    case 1:
      team2.push(new Exterminator());
      break;
    case 2:
      team2.push(new Knight());
      break;
    case 3:
      team2.push(new Necro());
      break;
    case 4:
      team2.push(new Warrior());
      break;
    default:
      console.log(team2);
  }
}

// Spawn warriors
function spawnWarriors2() {
  for(let i = 0; i < team2.length; i++) {
    team2[i].spawn();
  }
}

  // Adding card for the charachters
    createCards(this);
    this.cards=createCards(this);
    
 
    for(let i=0; i<5; i++) {
      this.cardsP1[i]=this.cards[i];
    }
    for(let j=0; j<5; j++) {
      this.cardsP2[j]=this.cards[j+5];
    }
 
    
 
    this.cardsP1[this.indexP1].setScale(0.45);
    this.cardsP2[this.indexP2].setScale(0.45);

    

    // Define keybinds
 cursors = this.input.keyboard.createCursorKeys();
  createPlayerBase(this);

  // creating archer animations 
  createArcherAnim(this);

  // creating necro animations
  createNecroAnim(this);

  // creating knight animations
  createKnightAnim(this);
  
  // creating warrior animations 
  createWarriorAnim(this);

  // creating ext animations
  createEXTAnim(this);







 
    
    
    // eslint-disable-next-line no-console

    // Background map game
    const backgroundGame = this.add
      .image(this.scale.width * 0.5, this.scale.height * 0.5, 'backgroundGame')
      .setOrigin(0.5)
      .setDepth(-1);
    backgroundGame.setScale(
      this.scale.width / backgroundGame.width,
      this.scale.height / backgroundGame.height,
    );

    // Hud creation
    const hudGame = this.add
      .image(this.scale.width * 0.5, this.scale.height * 0.5, 'hud')
      .setOrigin(0.5)
      .setDepth(0.9);
    hudGame.setScale(this.scale.width / hudGame.width, this.scale.height / hudGame.height);

    // Add sound toggle button
    const musicT = this.sound.add('theme');
    musicT.setVolume(0.2);
    musicT.play({ loop: true });
    this.soundButton = this.add
      .image(this.sys.game.config.width - 30, 450, this.soundOn ? 'soundOn' : 'soundOff')
      .setDepth(1);
    this.soundButton.setInteractive();
    this.soundButton.on('pointerdown', this.toggleSound, this);
    this.soundButton.on('pointerover', () => {
      this.soundButton.setScale(1.2);
    });
    this.soundButton.on('pointerout', () => {
      this.soundButton.setScale(1);
    });

    // Dev button to go to the end scene (to be delted later in developement)
    const goToEndSceneButton = this.add
      .text(400, 450, 'Dev: go to end scene', { font: '24px Arial', fill: '#ffffff' })
      .setDepth(1);
    goToEndSceneButton.setInteractive();

    goToEndSceneButton.on('pointerover', () => {
      goToEndSceneButton.setFontSize(30);
      goToEndSceneButton.setColor('#ffff99');
      goToEndSceneButton.setX(400);
      goToEndSceneButton.setY(445);
    });
    goToEndSceneButton.on('pointerout', () => {
      goToEndSceneButton.setFontSize(24);
      goToEndSceneButton.setColor('#ffffff');
      goToEndSceneButton.setX(400);
      goToEndSceneButton.setY(450);
    });
    goToEndSceneButton.on('pointerdown', () => {
      this.game.winner = this.player1
      this.sound.stopAll();
      this.scene.stop('game-scene');
      this.scene.switch('end-scene');
    });

    // Add pause button
    const pauseButton = this.add
      .text(10, 450, 'Pause', { font: '24px Arial', fill: '#ffffff' })
      .setDepth(1);
    pauseButton.setInteractive();

    pauseButton.on('pointerover', () => {
      pauseButton.setFontSize(30);
      pauseButton.setColor('#ffff99');
      pauseButton.setX(10);
      pauseButton.setY(445);
    });
    pauseButton.on('pointerout', () => {
      pauseButton.setFontSize(24);
      pauseButton.setColor('#ffffff');
      pauseButton.setX(10);
      pauseButton.setY(450);
    });
    pauseButton.on('pointerdown', () => {
      this.scene.launch('PauseScene');
      this.scene.pause();
      this.sound.pauseAll();
    });

    const box = this.add.graphics().setDepth(1);
    const boxWidth = 100;
    const boxHeight = 40;
    const cornerRadius = 10;

    box.fillStyle(0x000000, 1).setDepth(1); // Couleur noire
    box
      .fillRoundedRect(
        (this.sys.game.config.width - boxWidth) / 2,
        60,
        boxWidth,
        boxHeight,
        cornerRadius,
      )
      .setDepth(1);

    box.lineStyle(4, 0x808080, 1).setDepth(1); // Couleur de bordure grise
    box
      .strokeRoundedRect(
        (this.sys.game.config.width - boxWidth) / 2,
        60,
        boxWidth,
        boxHeight,
        cornerRadius,
      )
      .setDepth(1);

    const player1GoldsText = this.add
      .text(this.sys.game.config.width * 0.11, 95, '100', {
        fontSize: '18px',
        fill: '#ffffff',
      })
      .setOrigin(0.5)
      .setDepth(1);

    const player2GoldsText = this.add
      .text(this.sys.game.config.width * 0.89, 95, '100', {
        fontSize: '18px',
        fill: '#ffffff',
      })
      .setOrigin(0.5)
      .setDepth(1);

    const timerText = this.add
      .text(this.sys.game.config.width / 2, 80, '15', {
        fontSize: '24px',
        fill: '#ffffff',
      })
      .setOrigin(0.5)
      .setDepth(1);

    let timeLeft = 3;

    let incrementAmount = 100;

    const updateTimer = () => {
      timeLeft -= 1;
      timerText.setText(`${timeLeft}`);

      if (timeLeft === 0) {
        console.log(this.indexP1);
        console.log(this.indexP2);
        addWarriorP1(this.indexP1, this, team1);
        addWarriorP2(this.indexP2, this, team2);
        console.log(team1);
        console.log(team2);
        timeLeft = 3; // Réinitialiser le temps à 15 une fois qu'il atteint zéro
        this.player1.addGolds(incrementAmount);
        const currentGolds = this.player1.golds; // Met à jour le nombre actuel de golds
        player1GoldsText.setText(`${currentGolds}`);
        player2GoldsText.setText(`${currentGolds}`);
        incrementAmount *= 1.5; // Montant à incrémenter (peut être ajusté)
        spawnWarriors1();
        spawnWarriors2();
      }
    };

    const timerEvent = this.time.addEvent({
      delay: 1000, // Mise à jour toutes les secondes
      callback: updateTimer,
      callbackScope: this,
      loop: true,
    });

    // New Timer
    const newTimerText = this.add
    .text(this.sys.game.config.width / 2, 120, '15:00', {
      fontSize: '24px',
      fill: '#ffffff',
    })
    .setOrigin(0.5)
    .setDepth(1);

    let newTimeLeft = 900; // 15 minutes in seconds

    const updateNewTimer = () => {
    const minutes = Math.floor(newTimeLeft / 60);
    const seconds = newTimeLeft % 60;

    // Format the timer text to display minutes and seconds
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    newTimerText.setText(formattedTime);

    newTimeLeft -= 1;

    if (newTimeLeft === 0) {
      // Redirect to EndScene
      this.scene.start('end-scene')
    }
    };

    const newTimerEvent = this.time.addEvent({
    delay: 1000, // Update every second
    callback: updateNewTimer,
    callbackScope: this,
    loop: true,
    });

    this.player1Stats = {
      health: 10000,
      golds: Player.DEFAULT_GOLDS,
      maxUnits: Player.DEFAULT_MAX_UNITS,
    };

    this.player2Stats = {
      health: 10000,
      golds: Player.DEFAULT_GOLDS,
      maxUnits: Player.DEFAULT_MAX_UNITS,
    };
    

  }

  // eslint-disable-next-line class-methods-use-this
  update() {
    // Phaser.Actions.Call(this.knightSpawn.group.getChildren(), (knight) =>
    //  this.physics.moveToObject(knight, 'X', 10),
    // );

  
      }

  toggleSound() {
    this.soundOn = !this.soundOn;
    if (this.soundOn) {
      // Logic to turn sound on
      this.soundButton.setTexture('soundOn');
      this.sound.play('theme');
    } else {
      // Logic to turn sound off
      this.soundButton.setTexture('soundOff');
      this.sound.stopAll();
    }
  }
}

export default GameScene;
