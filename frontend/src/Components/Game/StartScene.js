import Phaser from 'phaser';
import logoAsset from '../../assets/ARMADA_ASSAULT_LOGO_TEXT_NOBACKGROUND.png';
import backgroundAsset from '../../assets/start_background2.png';
import musicAsset from '../../assets/audio/theme_musics/Fission.mp3';

export default class StartUI extends Phaser.Scene {
  constructor() {
    super('start-scene');
  }

  preload() {
    this.load.image('logoAsset', logoAsset);
    this.load.image('background', backgroundAsset);
    this.load.audio('musicStartScene', musicAsset);
  }

  create() {
    const themeSong = this.sound.add('musicStartScene');
    themeSong.setVolume(0.3);
    themeSong.play({ loop: true });

    // Add the background image and set darker tint
    const background = this.add
      .image(this.scale.width * 0.5, this.scale.height * 0.5, 'background')
      .setOrigin(0.5)
      .setDepth(-1);
    background.setScale(this.scale.width / background.width, this.scale.height / background.height);
    background.setTint(0x999999);

    // Load the logo
    const logo = this.add
      .image(this.scale.width * 0.5, this.scale.height * 0.45, 'logoAsset')
      .setOrigin(0.5)
      .setDepth(-0.9);

    // Adjust the brightness of the logo
    logo.setTint(0xffffff);

    // Create the "PLAY!" text under the logo
    const playText = this.add
      .text(this.scale.width * 0.5, logo.y + logo.displayHeight, 'PLAY!', {
        fontFamily: 'Blackletter, serif',
        fontSize: '40px',
        color: '#ffffff',
        fontStyle: 'bold',
      })
      .setOrigin(0.5);

    playText.setInteractive();
    playText.on('pointerover', () => {
      playText.setFontSize(52);
      playText.setColor('#ffff99');
    });
    playText.on('pointerout', () => {
      playText.setFontSize(40);
      playText.setColor('#ffffff');
    });
    playText.on('pointerdown', () => {
      this.sound.stopAll();
      this.scene.stop('start-scene');
      this.scene.switch('game-scene');
    });

    // Create the "How to play?" text
    const instructionText = this.add
      .text(this.scale.width * 0.5, playText.y + playText.displayHeight + 10, 'How to play?', {
        fontFamily: 'Blackletter, serif',
        fontSize: '30px',
        color: '#ffffff',
        fontStyle: 'bold',
      })
      .setOrigin(0.5);

    instructionText.setInteractive();
    instructionText.on('pointerover', () => {
      instructionText.setFontSize(36);
      instructionText.setColor('#ffff99');
    });
    instructionText.on('pointerout', () => {
      instructionText.setFontSize(30);
      instructionText.setColor('#ffffff');
    });
    instructionText.on('pointerdown', () => {
      if (this.scene.get('instruction-scene') === undefined) {
        this.scene.start('instruction-scene');
      } else this.scene.switch('instruction-scene');
    });

    // Add pulsating effect to the logo
    this.tweens.add({
      targets: playText,
      scaleX: 1.15, // Scale up by 10%
      scaleY: 1.15,
      duration: 2000, // 1 second for each pulse
      yoyo: true, // Play the tween in reverse
      repeat: -1, // Repeat indefinitely
      ease: 'Cubic.easeInOut',
      delay: 1000,
    });
  }
}
