/* eslint-disable no-unused-vars */

// All the imports
import Phaser from 'phaser';
import music from '../../assets/audio/theme_musics/C418 - Aria Math.mp3';
import soundOnAsset from '../../assets/soundOn.png';
import soundOffAsset from '../../assets/soundOff.png';
import backgroundGameAsset from '../../assets/background.png';
import hudAsset from '../../assets/armadaHUD.png';
import { createCards, preloadCards } from './CardCreator';
import Player from './Player';
import { createPlayerBase, preloadPlayerBase } from './PlayerBase';
import MobP1Ex from '../../assets/mobPlayer1Ex.png';
// import KnightSpawn from './KnightSpawn';

// Warrior imports
import warriorRunSpriteSheet from '../../assets/sprites/NightborneSprites/NightBorneRun.png';
import warriorHitSpriteSheet from '../../assets/sprites/NightborneSprites/NightBorneHit.png';
import warriorDeathSpriteSheet from '../../assets/sprites/NightborneSprites/NightBorneDeath.png';

// Exterminator imports

import extMoveSpriteSheet from '../../assets/sprites/ExterminatorSprites/EXTmove.png';
import extDeathSpriteSheet from '../../assets/sprites/ExterminatorSprites/EXTdeath.png';
import extAttackSpriteSheet from '../../assets/sprites/ExterminatorSprites/EXTattack.png';

// Knight Imports
import knightRunSpriteSheet from '../../assets/sprites/KnightSprites/KnightRun.png';
import knightAttackSpriteSheet from '../../assets/sprites/KnightSprites/KnightAttack.png';
import knightDeathSpriteSheet from '../../assets/sprites/KnightSprites/KnightDeath.png';

// Necro Imports
import necroRunSpriteSheet from '../../assets/sprites/NecroSprites/NecroRun.png';
import necroDeathSpriteSheet from '../../assets/sprites/NecroSprites/NecroDeath.png';
import necroAttackSpriteSheet from '../../assets/sprites/NecroSprites/NecroAttack.png';

// All the key 
const KNIGHT_KEY = 'knight';

// Variables here
let cursors;
let player1CharactersGroup;
let player2CharactersGroup;

class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene');
    this.soundOn = true;
    this.soundButton = undefined;
    this.player1 = undefined;
    this.player2 = undefined;
    this.base1 = undefined;
    this.base2 = undefined;
    this.cursors = undefined;
    this.player1CharactersGroup = undefined;
    this.player2CharactersGroup = undefined;
    // this.KnightSpawn = undefined;
  }

  // Preload
  preload() {

    // TEST FOR EXEMPLE DONT DELETE THIS
    this.load.image('KNIGHT_KEY', MobP1Ex)
    // thx


    this.load.image('backgroundGame', backgroundGameAsset);
    this.load.image('hud', hudAsset);
    this.load.image('soundOn', soundOnAsset);
    this.load.image('soundOff', soundOffAsset);
    this.load.audio('theme', music);
    

    // Necro Loads
    this.load.spritesheet('NecroAttack', necroAttackSpriteSheet, {
      frameWidth: 160,
      frameHeight: 103,
    });
    this.load.spritesheet('NecroRun', necroRunSpriteSheet, {
      frameWidth: 160,
      frameHeight: 103,
    });
    this.load.spritesheet('NecroDeath', necroDeathSpriteSheet, {
      frameWidth: 160,
      frameHeight: 103,
    });

    // Knight Loads
    this.load.spritesheet('KnightAttack', knightAttackSpriteSheet, {
      frameWidth: 288,
      frameHeight: 128,
    });
    this.load.spritesheet('KnightRun', knightRunSpriteSheet, {
      frameWidth: 288,
      frameHeight: 124,
    });
    this.load.spritesheet('KnightDeath', knightDeathSpriteSheet, {
      frameWidth: 288,
      frameHeight: 80,
    });

    // Warrior Loads
    this.load.spritesheet('NightBorneRun', warriorRunSpriteSheet, {
      frameWidth: 80,
      frameHeight: 64,
    });
    this.load.spritesheet('NightBorneHit', warriorHitSpriteSheet, {
      frameWidth: 80,
      frameHeight: 64,
    });
    this.load.spritesheet('NightBorneDeath', warriorDeathSpriteSheet, {
      frameWidth: 80,
      frameHeight: 64,
    });

    // Exterminator Loads
    this.load.spritesheet('ExterminatorMove', extMoveSpriteSheet, {
      frameWidth: 100,
      frameHeight: 26,
    });
    this.load.spritesheet('ExterminatorDeath', extDeathSpriteSheet, {
      frameWidth: 100,
      frameHeight: 26,
    });
    this.load.spritesheet('ExterminatorAttack', extAttackSpriteSheet, {
      frameWidth: 100,
      frameHeight: 26,
    });

    // preloading cards assets
    preloadCards(this);

    preloadPlayerBase(this);
  }

  create() {
    // Adding card for the charachters
    createCards(this);

    // Adding Playerbases to the game
    createPlayerBase(this);
    
    // Creating players (will need to modify with backend)
    this.player1= new Player();
    this.player2= new Player();

    player1CharactersGroup = this.physics.add.group();
    player2CharactersGroup = this.physics.add.group();

    // Define keybinds
    cursors = this.input.keyboard.createCursorKeys();

  // Base Animation Creation

// Necro Creates
// Necro Attack Animation Creation
this.anims.create({
  key: 'NecAttack',
  frames: this.anims.generateFrameNumbers('NecroAttack', { start: 0, end: 12 }),
  frameRate: 7,
  repeat: -1,
});
// Necro Death Animation Creation
this.anims.create({
  key: 'NecDeath',
  frames: this.anims.generateFrameNumbers('NecroDeath', { start: 0, end: 8 }),
  frameRate: 7,
  repeat: -1,
});
// Necro Run Animation Creation
this.anims.create({
  key: 'NecRun',
  frames: this.anims.generateFrameNumbers('NecroRun', { start: 0, end: 7 }),
  frameRate: 7,
  repeat: -1,
});
const nc = this.add.sprite(450, 300, 'NecroRun');
nc.play('NecRun').setDepth(1);

const nc2 = this.add.sprite(500, 300, 'NecroDeath');
nc2.play('NecDeath').setDepth(1);

const nc3 = this.add.sprite(550, 300, 'NecroAttack');
nc3.play('NecAttack').setDepth(1);
  // Knight Creates
// Knight Attack Animation Creation
this.anims.create({
  key: 'KnighAttack',
  frames: this.anims.generateFrameNumbers('KnightAttack', { start: 0, end: 17 }),
  frameRate: 14,
  repeat: -1,
});
  // Knight Run Animation Creation
   this.anims.create({
    key: 'KnighRun',
    frames: this.anims.generateFrameNumbers('KnightRun', { start: 0, end: 8 }),
    frameRate: 10,
    repeat: -1,
  });

  // Knight Run Animation Creation
  this.anims.create({
    key: 'KnighDeath',
    frames: this.anims.generateFrameNumbers('KnightDeath', { start: 0, end: 12 }),
    frameRate: 10,
    repeat: -1,
  });
  const kn = this.add.sprite(300, 200, 'KnightRun');
  kn.play('KnighRun').setDepth(1);

  const kn2 = this.add.sprite(360, 200, 'KnightAttack');
  kn2.play('KnighAttack').setDepth(1);
  
  const kn3 = this.add.sprite(450, 200, 'KnightDeath');
  kn3.play('KnighDeath').setDepth(1);

    // Warrior Creates

    // Warrior Run Animation Creation
    this.anims.create({
      key: 'WarriorRun',
      frames: this.anims.generateFrameNumbers('NightBorneRun', { start: 0, end: 5 }),
      frameRate: 10,
      repeat: -1,
    });

    // Warrior Hit Animation Creation
    this.anims.create({
      key: 'WarriorHit',
      frames: this.anims.generateFrameNumbers('NightBorneHit', { start: 0, end: 12 }),
      frameRate: 15,
      repeat: -1,
    });

    // Warrior Death Animation Creation
    this.anims.create({
      key: 'WarriorDeath',
      frames: this.anims.generateFrameNumbers('NightBorneDeath', { start: 0, end: 24 }),
      frameRate: 10,
      repeat: -1,
    });

    // Creates de Exterminator

    // Exterminator move animation

    this.anims.create({
      key: 'ExtMove',
      frames: this.anims.generateFrameNumbers('ExterminatorMove', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });

    // Exterminator Death animation

    this.anims.create({
      key: 'ExtDeath',
      frames: this.anims.generateFrameNumbers('ExterminatorDeath', { start: 0, end: 5 }),
      frameRate: 7,
      repeat: -1,
    });

    // Exterminator Attack Animation

    this.anims.create({
      key: 'ExtAttack',
      frames: this.anims.generateFrameNumbers('ExterminatorAttack', { start: 0, end: 4 }),
      frameRate: 7,
      repeat: -1,
    });

    // Instances de Exterminator
    // eslint-disable-next-line prefer-const
    let ext = this.add.sprite(300, 300, 'ExterminatorMove');
    ext.play('ExtMove').setDepth(1);

    // eslint-disable-next-line prefer-const
    let ext2 = this.add.sprite(300, 350, 'ExterminatorDeath');
    ext2.play('ExtDeath').setDepth(1);

    // eslint-disable-next-line prefer-const
    let ext3 = this.add.sprite(300, 400, 'ExterminatorAttack');
    ext3.play('ExtAttack').setDepth(1);

    // Instances de warrior

    // eslint-disable-next-line prefer-const
    let warrior = this.add.sprite(100, 200, 'NightBorneRun');
    warrior.play('WarriorRun').setDepth(1);

    // eslint-disable-next-line prefer-const
    let warrior2 = this.add.sprite(100, 250, 'NightBorneHit');
    warrior2.play('WarriorHit').setDepth(1);

    // eslint-disable-next-line prefer-const
    let warrior3 = this.add.sprite(100, 300, 'NightBorneDeath');
    warrior3.play('WarriorDeath').setDepth(1);

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
      this.game.winner = this.player1;
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

    let timeLeft = 15;

    let incrementAmount = 100;

    const updateTimer = () => {
      timeLeft -= 1;
      timerText.setText(`${timeLeft}`);

      if (timeLeft === 0) {
        timeLeft = 16; // Réinitialiser le temps à 15 une fois qu'il atteint zéro
        this.player1.addGolds(incrementAmount);
        const currentGolds = this.player1.golds; // Met à jour le nombre actuel de golds
        player1GoldsText.setText(`${currentGolds}`);
        player2GoldsText.setText(`${currentGolds}`);
        incrementAmount *= 1.5; // Montant à incrémenter (peut être ajusté)
      }
    };

    const timerEvent = this.time.addEvent({
      delay: 1000, // Mise à jour toutes les secondes
      callback: updateTimer,
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
