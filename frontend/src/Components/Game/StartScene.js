import Phaser from 'phaser';
import logoAsset from '../../assets/ARMADA_ASSAULT_LOGO_TEXT_NOBACKGROUND.png';


export default class StartUI extends Phaser.Scene {
    constructor() {
        super('game-start');
    }

    preload(){
        this.load.image('logoAsset', logoAsset);
       
    }

    create() {

        // Charger le logo
        const logo = this.add.image(this.scale.width * 0.5, this.scale.height * 0.45, 'logoAsset').setOrigin(0.5).setDepth(-1);

        // Ajuster la luminosité du logo (augmenter la clarté)
        logo.setTint(0xffffff); // La valeur 0xffffff représente le blanc pur.

        // Créer le texte "JOUER" sous le logo
        const jouerText = this.add.text(this.scale.width * 0.5, logo.y + logo.displayHeight, 'JOUER',
            {
                fontFamily: 'Blackletter, serif',
                fontSize: '40px',
                color: '#ffffff',
                fontStyle: 'bold'
            }
        ).setOrigin(0.5);


    
        jouerText.setInteractive();
        jouerText.on('pointerover', () => { jouerText.setFontSize(52); jouerText.setColor('#ffff99');});
        jouerText.on('pointerout', () => { jouerText.setFontSize(40);  jouerText.setColor('#ffffff');});
        jouerText.on('pointerdown', () => {
            this.scene.start('game-scene');
        });
    }
}
