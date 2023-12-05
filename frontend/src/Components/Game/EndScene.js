/* eslint-disable no-unused-vars */
import Phaser from 'phaser';
import backgroundAssetEnd from '../../assets/end_background.png';
import musicAsset from '../../assets/audio/theme_musics/Casey_Tells_the_Truth.mp3';

export default class EndScene extends Phaser.Scene {
  constructor() {
    super('end-scene');
  }

  preload() {
    this.load.image('backgroundEnd', backgroundAssetEnd);
    this.load.audio('musicEndScene', musicAsset);
  }

  create() {
    // end screen music
    const themeSong = this.sound.add('musicEndScene');
    themeSong.setVolume(0.5);
    themeSong.play();

    // Add the background image and set darker tint
    const backgroundEnd = this.add
      .image(this.scale.width * 0.5, this.scale.height * 0.5, 'backgroundEnd')
      .setOrigin(0.5)
      .setDepth(-1);
    backgroundEnd.setScale(
      this.scale.width / backgroundEnd.width,
      this.scale.height / backgroundEnd.height,
    );
    backgroundEnd.setTint(0x999999);

    // showing winner
    const winnerName = this.add
      .text(
        this.scale.width * 0.5,
        this.scale.height * 0.3,
        `The winner is ${this.sys.game.global.winner}!`,
        {
          fontFamily: 'Blackletter, serif',
          fontSize: '32px',
          color: '#ffffff',
          fontStyle: 'bold',
        },
      )
      .setOrigin(0.5);

    // Restart button implementation
    const restartButton = this.add
      .text(this.scale.width * 0.5, this.scale.height * 0.5, 'Play again?', {
        fontFamily: 'Blackletter, serif',
        fontSize: '32px',
        color: '#ffffff',
        fontStyle: 'bold',
      })
      .setOrigin(0.5);
    restartButton.setInteractive();
    restartButton.on('pointerover', () => {
      restartButton.setFontSize(40);
      restartButton.setColor('#ffff99');
    });
    restartButton.on('pointerout', () => {
      restartButton.setFontSize(32);
      restartButton.setColor('#ffffff');
    });
    restartButton.on('pointerdown', () => {
      this.sound.stopAll();
      this.scene.start('game-scene');
    });

    // Main menu button implementation
    const mainMenuButton = this.add
      .text(this.scale.width * 0.5, this.scale.height * 0.6, 'Go to main menu!', {
        fontFamily: 'Blackletter, serif',
        fontSize: '32px',
        color: '#ffffff',
        fontStyle: 'bold',
      })
      .setOrigin(0.5);
    mainMenuButton.setInteractive();
    mainMenuButton.on('pointerover', () => {
      mainMenuButton.setFontSize(40);
      mainMenuButton.setColor('#ffff99');
    });
    mainMenuButton.on('pointerout', () => {
      mainMenuButton.setFontSize(32);
      mainMenuButton.setColor('#ffffff');
    });
    mainMenuButton.on('pointerdown', () => {
      this.sound.stopAll();
      this.scene.start('start-scene');
    });
  }
}
