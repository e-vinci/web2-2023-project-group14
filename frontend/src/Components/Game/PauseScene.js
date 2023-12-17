import Phaser from 'phaser';

export default class PauseUI extends Phaser.Scene {
  constructor() {
    super({ key: 'PauseScene', active: false });
  }

  create() {
    const pauseBackground = this.add.rectangle(400, 300, 800, 600, 0x000000, 0.7);
    pauseBackground.active = true;
    const continueButton = this.add
      .text(400, 250, 'Continuer', {
        fontFamily: 'Blackletter, serif',
        fontSize: '32px',
        color: '#ffffff',
        fontStyle: 'bold',
      })
      .setOrigin(0.5);
    continueButton.setInteractive();
    continueButton.on('pointerover', () => {
      continueButton.setFontSize(40);
      continueButton.setColor('#ffff99');
    });
    continueButton.on('pointerout', () => {
      continueButton.setFontSize(32);
      continueButton.setColor('#ffffff');
    });
    continueButton.on('pointerdown', () => {
      this.scene.stop('PauseScene');
      this.scene.resume('game-scene');
      this.scene.get('game-scene').sound.resumeAll();
    });

    const quitButton = this.add
      .text(402, 350, 'Retourner au Menu', {
        fontFamily: 'Blackletter, serif',
        fontSize: '32px',
        color: '#ffffff',
        fontStyle: 'bold',
      })
      .setOrigin(0.5);
    quitButton.setInteractive();
    quitButton.on('pointerover', () => {
      quitButton.setFontSize(40);
      quitButton.setColor('#ffff99');
    });
    quitButton.on('pointerout', () => {
      quitButton.setFontSize(32);
      quitButton.setColor('#ffffff');
    });
    quitButton.on('pointerdown', () => {
      this.scene.stop('PauseScene'); // Arrêter la scène de pause
      this.scene.stop('game-scene'); // Arrêter la scène actuelle du jeu
      this.scene.switch('start-scene'); // Démarrer la scène d'accueil
    });
  }
}
