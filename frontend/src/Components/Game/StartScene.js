import Phaser from 'phaser';
import logoAsset from '../../assets/ARMADA_ASSAULT_LOGO_TEXT_NOBACKGROUND.png';
import startbackgroundImage from '../../assets/start_background.png'; 

export default class StartUI extends Phaser.Scene {
    constructor() {
        super('game-start');
    }

    preload(){
        this.load.image('logoAsset', logoAsset);
        this.load.image('startbackgroundImage', startbackgroundImage); // Chargez l'image de fond
    }

    create() {
        // Ajouter l'image de fond
        const background = this.add.image(this.scale.width, this.scale.height, 'startbackgroundImage').setOrigin(0);
        background.setDisplaySize(this.scale.width, this.scale.height);

        // Charger le logo
        const logo = this.add.image(this.scale.width * 0.5, this.scale.height * 0.5, 'logoAsset').setOrigin(0.5).setDepth(-1);

        // Ajuster la luminosité du logo (augmenter la clarté)
        logo.setTint(0xffffff); // La valeur 0xffffff représente le blanc pur.

        // Créer le texte "JOUER" sous le logo
        const jouerText = this.add.text(this.scale.width * 0.5, logo.y + logo.displayHeight, 'JOUER',
            {
                fontFamily: 'Candara, Arial',
                fontSize: '48px',
                color: '#ffffff',
                fontStyle: 'bold'
            }
        ).setOrigin(0.5);

        jouerText.setInteractive();
        jouerText.on('pointerover', () => { jouerText.setFontSize(60); });
        jouerText.on('pointerout', () => { jouerText.setFontSize(48); });
        jouerText.on('pointerdown', () => {
            this.scene.start('game-scene');
        });
    }
}
