/* eslint-disable no-unused-vars */
import Phaser from 'phaser';
import logoAsset from '../../assets/ARMADA_ASSAULT_LOGO_TEXT_NOBACKGROUND.png';
import goldLogoAsset from '../../assets/Icons_instruction_scene/gold.png';
import timerAsset from '../../assets/Icons_instruction_scene/timer_icon.png';
import keysAsset from '../../assets/Icons_instruction_scene/keys_to_control_selection.png';
import charSelectedAsset from '../../assets/Icons_instruction_scene/char_selected_highlight.png';
import playersBases from '../../assets/Icons_instruction_scene/playerBaseWiki.png'

export default class InstructionScene extends Phaser.Scene {
  constructor() {
    super('instruction-scene');
  }

  preload() {
    this.load.image('logo', logoAsset);
    this.load.image('goldLogo', goldLogoAsset);
    this.load.image('timer', timerAsset);
    this.load.image('keys', keysAsset);
    this.load.image('charSelected', charSelectedAsset);
    this.load.image('playersBases', playersBases);
  }

  create() {
    // Creates the back button from the instruction scene
    const backBtn = this.add
      .text(this.scale.width * 0.21, this.scale.height * 0.97, 'GO BACK TO MAIN MENU', {
        fontFamily: 'Blackletter, serif',
        fontSize: '20px',
        color: '#ffffff',
        fontStyle: 'bold',
      })
      .setOrigin(0.5, 0.5);

    backBtn.setInteractive();
    backBtn.on('pointerover', () => {
      backBtn.setFontSize(25);
      backBtn.setColor('#ffff99');
    });
    backBtn.on('pointerout', () => {
      backBtn.setFontSize(20);
      backBtn.setColor('#ffffff');
    });
    backBtn.on('pointerdown', () => {
      this.scene.stop('instruction-scene');
      this.scene.switch('start-scene');
    });

    // background setup
    const background = this.add
      .image(this.scale.width * 0.5, this.scale.height * 0.5, 'background')
      .setOrigin(0.5)
      .setDepth(-1);
    background.setScale(this.scale.width / background.width, this.scale.height / background.height);
    background.setTint(0x444444);

    // logo setup
    const logo = this.add
      .image(this.scale.width * 0.5, this.scale.height * 0.02, 'logoAsset')
      .setOrigin(0.5, 0)
      .setDepth(-0.9)
      .setScale(0.6);
    logo.setTint(0xffffff); // La valeur 0xffffff représente le blanc pur.

    // Instruction text
    const text1 =
      "Welcome to Armada Assault! Your mission is clear: dominate the battlefield by strategically demolishing your opponent's base nexus. Harness the power of our five unique units, spawned through careful management of gold resources and unit spawn limits. Victory awaits those who master the art of strategic warfare!";
    const introText = this.add
      .text(this.scale.width * 0.04, this.scale.height * 0.15, text1, {
        fontFamily: 'Blackletter, serif',
        fontSize: '20px',
        color: '#ffffff',
        fontStyle: 'bold',
        wordWrap: {
          width: this.scale.width * 0.98,
        },
      })
      .setOrigin(0, 0);

    // Logo golds setup
    const goldLogo = this.add
      .image(this.scale.width * 0.04, this.scale.height * 0.35, 'goldLogo')
      .setOrigin(0, 0.5)
      .setScale(0.08);
    // Logo golds text
    const goldText = this.add
      .text(
        this.scale.width * 0.12,
        this.scale.height * 0.35,
        ': This icon reflects the amount of gold at your disposal for purchasing your fighter units.',
        {
          fontFamily: 'Blackletter, serif',
          fontSize: '20px',
          color: '#ffffff',
          fontStyle: 'bold',
          wordWrap: {
            width: this.scale.width * 0.8,
          },
        },
      )
      .setOrigin(0, 0.5);

      // Logo timer setup
    const timerLogo = this.add
    .image(this.scale.width * 0.02, this.scale.height * 0.45, 'timer')
    .setOrigin(0, 0.5)
    .setScale(0.5);
  // Logo timer text
  const timerText = this.add
    .text(
      this.scale.width * 0.12,
      this.scale.height * 0.45,
      ': At the end of this timer, your golds will be consumed in order to spawn your units.',
      {
        fontFamily: 'Blackletter, serif',
        fontSize: '20px',
        color: '#ffffff',
        fontStyle: 'bold',
        wordWrap: {
          width: this.scale.width * 0.8,
        },
      },
    )
    .setOrigin(0, 0.5);

          // Logo keys setup
          const keysLogo = this.add
          .image(this.scale.width * 0.02, this.scale.height * 0.55, 'keys')
          .setOrigin(0, 0.5)
          .setScale(0.31);
        // Logo keys text
        const keysText = this.add
          .text(
            this.scale.width * 0.12,
            this.scale.height * 0.55,
            ': Player 1 must use the "Q" and "D" keys to select his units while player 2 the "LEFT" and "RIGHT" arrow keys.',
            {
              fontFamily: 'Blackletter, serif',
              fontSize: '20px',
              color: '#ffffff',
              fontStyle: 'bold',
              wordWrap: {
                width: this.scale.width * 0.8,
              },
            },
          )
          .setOrigin(0, 0.5);

          // Logo charachters setup
          const charLogo = this.add
          .image(this.scale.width * 0.02, this.scale.height * 0.65, 'charSelected')
          .setOrigin(0, 0.5)
          .setScale(0.5);
        // Logo charachters text
        const charText = this.add
          .text(
            this.scale.width * 0.27,
            this.scale.height * 0.65,
            ': The selected charachter to be spawned will be higlighted like this.',
            {
              fontFamily: 'Blackletter, serif',
              fontSize: '20px',
              color: '#ffffff',
              fontStyle: 'bold',
              wordWrap: {
                width: this.scale.width * 0.8,
              },
            },
          )
          .setOrigin(0, 0.5);
        // Logo base
        const baseLogo = this.add
          .image(this.scale.width * 0.02, this.scale.height * 0.80, 'playersBases')
          .setOrigin(0, 0.5)
          .setScale(0.4);

        const baseText =  this.add
        .text(
          this.scale.width * 0.10,
          this.scale.height * 0.77,
          ': This is the nexus, as it is hit by units, its life decreases, the life bar at the top of the screen will drop accordingly, and if it reaches 0 it is game over. ',
          {
            fontFamily: 'Blackletter, serif',
            fontSize: '20px',
            color: '#ffffff',
            fontStyle: 'bold',
            wordWrap: {
              width: this.scale.width * 0.8,
            },
          },
        )

  }
}
