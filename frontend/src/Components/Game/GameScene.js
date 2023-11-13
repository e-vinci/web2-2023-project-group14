import Phaser from 'phaser';
import music from '../../assets/music.mp3';
import soundOnAsset from '../../assets/soundOn.png';
import soundOffAsset from '../../assets/soundOff.png';
import backgroundGameAsset from '../../assets/background.png';
import hudAsset from '../../assets/armadaHUD.png';

import archerCardAsset from '../../assets/archerCard.png';
import botCardAsset from '../../assets/botCard.png';
import knightCardAsset from '../../assets/knightCard.png';
import necromancerCardAsset from '../../assets/necromancerCard.png';
import warriorCardAsset from '../../assets/warriorCard.png';

import warriorSpriteSheet from '../../assets/sprites/NightBorneRun.png';


class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene');
  }

  preload() {
    this.load.image('backgroundGame', backgroundGameAsset);
    this.load.image('hud', hudAsset);
    this.load.image('soundOn',soundOnAsset);
    this.load.image('soundOff',soundOffAsset);
    this.load.audio('theme', music);

    this.load.image('archerCard', archerCardAsset);
    this.load.image('botCard', botCardAsset);
    this.load.image('knightCard', knightCardAsset);
    this.load.image('necromancerCard', necromancerCardAsset);
    this.load.image('warriorCard', warriorCardAsset);
  
    this.load.spritesheet('NightBorne', warriorSpriteSheet, {frameWidth: 80, frameHeight:64});
  }

  create() {
    
    

    // eslint-disable-next-line no-console

    // Background map game
    const backgroundGame = this.add.image(this.scale.width * 0.5, this.scale.height * 0.5, 'backgroundGame').setOrigin(0.5).setDepth(-1);
    backgroundGame.setScale(this.scale.width / backgroundGame.width, this.scale.height / backgroundGame.height);

    // Hud creation
    const hudGame = this.add.image(this.scale.width * 0.5, this.scale.height * 0.5, 'hud').setOrigin(0.5).setDepth(0.9);
    hudGame.setScale(this.scale.width / hudGame.width, this.scale.height / hudGame.height);

    // Warrior Run Animation Creation
    this.anims.create({
      key: 'run',
      frames: this.anims.generateFrameNumbers('NightBorne', {start:0, end:5}),
      frameRate:10,
      repeat: -1
      
    });
    

     // Creation de warrior
    // eslint-disable-next-line prefer-const
    let warrior = this.add.sprite(300,300, 'NightBorne');
    warrior.play('run');

   

    // Adding card for the charachters
    const archerCardP1 = this.add.image(this.scale.width * 0.05, this.scale.height * 0.65, 'archerCard').setOrigin(0.5,0.5).setDepth(1).setScale(0.38);
    archerCardP1.setInteractive();
    archerCardP1.on('pointerover', () => {archerCardP1.setScale(0.45)});
    archerCardP1.on('pointerout', () => {archerCardP1.setScale(0.38)});

    const botCardP1 = this.add.image(this.scale.width * 0.13, this.scale.height * 0.65, 'botCard').setOrigin(0.5,0.5).setDepth(1).setScale(0.38);
    botCardP1.setInteractive();
    botCardP1.on('pointerover', () => {botCardP1.setScale(0.45)});
    botCardP1.on('pointerout', () => {botCardP1.setScale(0.38)});

    const knightCardP1 = this.add.image(this.scale.width * 0.21, this.scale.height * 0.65, 'knightCard').setOrigin(0.5,0.5).setDepth(1).setScale(0.38);
    knightCardP1.setInteractive();
    knightCardP1.on('pointerover', () => {knightCardP1.setScale(0.45)});
    knightCardP1.on('pointerout', () => {knightCardP1.setScale(0.38)});

    const necromancerCardP1 = this.add.image(this.scale.width * 0.29, this.scale.height * 0.65, 'necromancerCard').setOrigin(0.5,0.5).setDepth(1).setScale(0.38);
    necromancerCardP1.setInteractive();
    necromancerCardP1.on('pointerover', () => {necromancerCardP1.setScale(0.45)});
    necromancerCardP1.on('pointerout', () => {necromancerCardP1.setScale(0.38)});

    const warriorCardP1 = this.add.image(this.scale.width * 0.37, this.scale.height * 0.65, 'warriorCard').setOrigin(0.5,0.5).setDepth(1).setScale(0.38);
    warriorCardP1.setInteractive();
    warriorCardP1.on('pointerover', () => {warriorCardP1.setScale(0.45)});
    warriorCardP1.on('pointerout', () => {warriorCardP1.setScale(0.38)});

    const warriorCardP2 = this.add.image(this.scale.width * 0.95, this.scale.height * 0.65, 'warriorCard').setOrigin(0.5,0.5).setDepth(1).setScale(0.38);
    warriorCardP2.setInteractive();
    warriorCardP2.on('pointerover', () => {warriorCardP2.setScale(0.45)});
    warriorCardP2.on('pointerout', () => {warriorCardP2.setScale(0.38)});

    const necromancerCardP2 = this.add.image(this.scale.width * 0.87, this.scale.height * 0.65, 'necromancerCard').setOrigin(0.5,0.5).setDepth(1).setScale(0.38);
    necromancerCardP2.setInteractive();
    necromancerCardP2.on('pointerover', () => {necromancerCardP2.setScale(0.45)});
    necromancerCardP2.on('pointerout', () => {necromancerCardP2.setScale(0.38)});

    const knightCardP2 = this.add.image(this.scale.width * 0.79, this.scale.height * 0.65, 'knightCard').setOrigin(0.5,0.5).setDepth(1).setScale(0.38);
    knightCardP2.setInteractive();
    knightCardP2.on('pointerover', () => {knightCardP2.setScale(0.45)});
    knightCardP2.on('pointerout', () => {knightCardP2.setScale(0.38)});

    const botCardP2 = this.add.image(this.scale.width * 0.71, this.scale.height * 0.65, 'botCard').setOrigin(0.5,0.5).setDepth(1).setScale(0.38);
    botCardP2.setInteractive();
    botCardP2.on('pointerover', () => {botCardP2.setScale(0.45)});
    botCardP2.on('pointerout', () => {botCardP2.setScale(0.38)});

    const archerCardP2 = this.add.image(this.scale.width * 0.63, this.scale.height * 0.65, 'archerCard').setOrigin(0.5,0.5).setDepth(1).setScale(0.38);
    archerCardP2.setInteractive();
    archerCardP2.on('pointerover', () => {archerCardP2.setScale(0.45)});
    archerCardP2.on('pointerout', () => {archerCardP2.setScale(0.38)});

     // Add sound toggle button
     const musicT = this.sound.add('theme');
     musicT.play();
     this.soundButton = this.add.image(this.sys.game.config.width - 30, 300, this.soundOn ? 'soundOn' : 'soundOff');
     this.soundButton.setInteractive();
     this.soundButton.on('pointerdown', this.toggleSound, this);
     this.soundButton.on('pointerover', () => {this.soundButton.setScale(1.2)});
     this.soundButton.on('pointerout', () => {this.soundButton.setScale(1)});

    const pauseButton = this.add.text(10, 450, 'Pause', { font: '24px Arial', fill: '#ffffff' });
    pauseButton.setInteractive();
    
    pauseButton.on('pointerover', () => { pauseButton.setFontSize(30); pauseButton.setColor('#ffff99');pauseButton.setX(10);pauseButton.setY(445)});
    pauseButton.on('pointerout',  () => { pauseButton.setFontSize(24); pauseButton.setColor('#ffffff');pauseButton.setX(10);pauseButton.setY(450)});
    pauseButton.on('pointerdown', () => {
      this.scene.launch('PauseScene');
      this.scene.pause();
    });

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
