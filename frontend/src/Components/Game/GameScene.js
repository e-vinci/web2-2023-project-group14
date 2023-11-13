/* eslint-disable no-unused-vars */
import Phaser from 'phaser';
import music from '../../assets/music.mp3';
import soundOnAsset from '../../assets/soundOn.png';
import soundOffAsset from '../../assets/soundOff.png';
import backgroundGameAsset from '../../assets/background.png';
import hudAsset from '../../assets/armadaHUD.png';
import { createCards, preloadCards } from './CardCreator';
import Player from './Player'

class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene');
    this.soundOn = true;
    this.soundButton = undefined;
    this.player1 = new Player();
  }

  preload() {
    this.load.image('backgroundGame', backgroundGameAsset);
    this.load.image('hud', hudAsset);
    this.load.image('soundOn', soundOnAsset);
    this.load.image('soundOff', soundOffAsset);
    this.load.audio('theme', music);

    preloadCards(this);
  }

  create() {
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

    // Cards creator
    const cardsPlayers = createCards(this);

    // Golds background creation
    const box = this.add.graphics().setDepth(1);
    const boxWidth = 100;
    const boxHeight = 40;
    const cornerRadius = 10;

    box.fillStyle(0x000000, 1).setDepth(1); // Black color
    box.fillRoundedRect(this.scale.width * 0.1, this.scale.height * 0.11, boxWidth, boxHeight, cornerRadius).setDepth(1);

    box.lineStyle(4, 0x808080, 1).setDepth(1); // Border color grey
    box.strokeRoundedRect(this.scale.width * 0.1, this.scale.height * 0.11, boxWidth, boxHeight, cornerRadius).setDepth(1);

    // Add sound toggle button
    const musicT = this.sound.add('theme');
    musicT.play();
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
    });

    const box = this.add.graphics().setDepth(1);
    const boxWidth = 100;
    const boxHeight = 40;
    const cornerRadius = 10;

    box.fillStyle(0x000000, 1).setDepth(1); // Couleur noire
    box.fillRoundedRect((this.sys.game.config.width - boxWidth) / 2, 60, boxWidth, boxHeight, cornerRadius).setDepth(1);

    box.lineStyle(4, 0x808080, 1).setDepth(1); // Couleur de bordure grise
    box.strokeRoundedRect((this.sys.game.config.width - boxWidth) / 2, 60, boxWidth, boxHeight, cornerRadius).setDepth(1);

    const timerText = this.add.text(this.sys.game.config.width / 2, 80, '15', {
      fontSize: '24px',
      fill: '#ffffff'
    }).setOrigin(0.5)
    .setDepth(1);

    let timeLeft = 15;

    const updateTimer = () => {
      timeLeft -= 1;
      timerText.setText(`${timeLeft}`);

      if (timeLeft === 0) {
        timeLeft = 16; // Réinitialiser le temps à 15 une fois qu'il atteint zéro
      }
    };

    const timerEvent = this.time.addEvent({
      delay: 1000, // Mise à jour toutes les secondes
      callback: updateTimer,
      callbackScope: this,
      loop: true
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
