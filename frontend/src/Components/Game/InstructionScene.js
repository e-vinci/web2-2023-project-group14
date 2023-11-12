/* eslint-disable no-unused-vars */
import Phaser from 'phaser';
import logoAsset from '../../assets/ARMADA_ASSAULT_LOGO_TEXT_NOBACKGROUND.png';
import backgroundAsset from '../../assets/start_background.png';

export default class InstructionScene extends Phaser.Scene {
    constructor() {
        super('instruction-scene');
    }

    preload() {
        this.load.image('background',backgroundAsset);
        this.load.image('logoAsset', logoAsset);


    }

    create() {
        // background setup
        const background = this.add.image(this.scale.width * 0.5, this.scale.height * 0.5, 'background').setOrigin(0.5).setDepth(-1);
        background.setScale(this.scale.width / background.width, this.scale.height / background.height);
        background.setTint(0x444444);

        // logo setup
        const logo = this.add.image(this.scale.width * 0.5, this.scale.height * 0.02, 'logoAsset').setOrigin(0.5,0).setDepth(-0.9).setScale(0.6);
        logo.setTint(0xffffff); // La valeur 0xffffff représente le blanc pur.

        // Instruction text
        const text1 = "Welcome to Armada Assault! Your mission is clear: dominate the battlefield by strategically demolishing your opponent's base nexus. Harness the power of our five unique units, spawned through careful management of gold resources and unit spawn limits. Victory awaits those who master the art of strategic warfare!";
        
        const introText = this.add.text(this.scale.width * 0.02, this.scale.height * 0.15, text1 ,
        { 
            fontFamily: 'Blackletter, serif',
            fontSize: '20px',
            color: '#ffffff',
            fontStyle: 'bold',
            wordWrap: {
                width: this.scale.width * 0.98,
            }
        }).setOrigin(0,0);
    }
}
