import Phaser from 'phaser';
import logoAsset from '../../assets/ARMADA_ASSAULT_LOGO_TEXT_NOBACKGROUND.png';
import backgroundAsset from '../../assets/start_background.png';


export default class StartUI extends Phaser.Scene {
    constructor() {
        super('start-scene');
    }

    preload(){
        this.load.image('logoAsset', logoAsset);
        this.load.image('background',backgroundAsset);
    }

    create() {

        // Add the background image and set darker tint
        const background = this.add.image(this.scale.width * 0.5, this.scale.height * 0.5, 'background').setOrigin(0.5).setDepth(-1);
        background.setScale(this.scale.width / background.width, this.scale.height / background.height);
        background.setTint(0x999999);

        // Charger le logo
        const logo = this.add.image(this.scale.width * 0.5, this.scale.height * 0.45, 'logoAsset').setOrigin(0.5).setDepth(-0.9);

        // Ajuster la luminosité du logo (augmenter la clarté)
        logo.setTint(0xffffff); // La valeur 0xffffff représente le blanc pur.

        // Créer le texte "JOUER" sous le logo
        const playText = this.add.text(this.scale.width * 0.5, logo.y + logo.displayHeight, 'PLAY!',
            {
                fontFamily: 'Blackletter, serif',
                fontSize: '40px',
                color: '#ffffff',
                fontStyle: 'bold'
            }
        ).setOrigin(0.5);

        playText.setInteractive();
        playText.on('pointerover', () => { playText.setFontSize(52); playText.setColor('#ffff99');});
        playText.on('pointerout', () =>  { playText.setFontSize(40);  playText.setColor('#ffffff');});
        playText.on('pointerdown', () => {
            this.scene.start('game-scene');
        });

        const instructionText = this.add.text(this.scale.width * 0.5, playText.y + playText.displayHeight+ 10, 'How to play?',
            {
                fontFamily: 'Blackletter, serif',
                fontSize: '30px',
                color: '#ffffff',
                fontStyle: 'bold'
            }
        ).setOrigin(0.5);

        instructionText.setInteractive();
        instructionText.on('pointerover', () => { instructionText.setFontSize(36); instructionText.setColor('#ffff99');});
        instructionText.on('pointerout', () =>  { instructionText.setFontSize(30);  instructionText.setColor('#ffffff');});
        instructionText.on('pointerdown', () => {
            this.scene.start('instruction-scene');
        });
    }
}
