/* eslint-disable no-unused-vars */
import Phaser from 'phaser';

export default class EndScene extends Phaser.Scene {

    constructor(){
        super('end-scene');
    }

    create(){
      // not needed anymore
      // const endBackground = this.add.rectangle(0, 0, 800, 600, 0x000000, 0.7).setOrigin(0,0);
    
    // showing winner
    const winnerName = this.add
      .text(this.scale.width * 0.5, this.scale.height * 0.3, `The winner is ${this.game.winner.playerName}!`, {
        fontFamily: 'Blackletter, serif',
        fontSize: '32px',
        color: '#ffffff',
        fontStyle: 'bold',
      })
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
        this.scene.switch('start-scene');
    });

    }

}