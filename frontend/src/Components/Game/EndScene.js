/* eslint-disable no-unused-vars */
import Phaser from 'phaser';

export default class EndScene extends Phaser.Scene {
    constructor(){
        super('end-scene');
    }

    create(){
        const endBackground = this.add.rectangle(0, 0, 800, 600, 0x000000, 0.7).setDepth(1).setOrigin(0,0);
    
    }

}