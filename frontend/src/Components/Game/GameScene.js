/* eslint-disable no-unused-vars */
import Phaser from 'phaser';
import music from '../../assets/music.mp3';
import soundOnAsset from '../../assets/soundOn.png';
import soundOffAsset from '../../assets/soundOff.png';
import backgroundGameAsset from '../../assets/background.png';
import hudAsset from '../../assets/armadaHUD.png';

import  {createCards,  preloadCards } from './CardCreator';


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

    preloadCards(this);
  }

  create() {
    // Background map game
    const backgroundGame = this.add.image(this.scale.width * 0.5, this.scale.height * 0.5, 'backgroundGame').setOrigin(0.5).setDepth(-1);
    backgroundGame.setScale(this.scale.width / backgroundGame.width, this.scale.height / backgroundGame.height);

    // Hud creation
    const hudGame = this.add.image(this.scale.width * 0.5, this.scale.height * 0.5, 'hud').setOrigin(0.5).setDepth(0.9);
    hudGame.setScale(this.scale.width / hudGame.width, this.scale.height / hudGame.height);

    // Cards creator
    const cardsPlayers = createCards(this);

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
