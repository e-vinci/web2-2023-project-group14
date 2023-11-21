/* eslint-disable no-underscore-dangle */
import Phaser from 'phaser';

export default class KnightSpawn {

  constructor(scene, knightKey = 'knight') {
    this.scene = scene;
    this.key = knightKey;

    this.Kgroup = this.scene.physics.add.group();
  }


  get group() {
    return this.Kgroup;
  }

  spawn(playerBaseX, playerBaseY) {
    const possibleSpawns = [[playerBaseX-30, Phaser.Math.Between(playerBaseY-150,playerBaseY+150)],
                            [playerBaseX+30, Phaser.Math.Between(playerBaseY-150,playerBaseY+150)]]
                        

    const knight = this.Kgroup.create(possibleSpawns[0][0], possibleSpawns[1][1], this.key);
    knight.setCollideWorldBounds(true);
    knight.setBounce(1);
    
  
    return knight;
  }
  
}