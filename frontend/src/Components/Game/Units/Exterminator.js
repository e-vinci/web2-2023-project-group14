/* eslint-disable no-console */
import Phaser from 'phaser';




export default class Exterminator extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, direction) {
      super(scene, x, y, 'EXT');
      this.health = 100;
      this.damage = 10;
      this.range = 50;
      this.speed = 10;
      this.direction=direction;
     
    // Add this entity to the scene's physics
  
    scene.physics.world.enable(this);
    
    // Add this entity to the scene
    scene.add.existing(this);

    // Archer Run Animation Creation

    if (!scene.anims.exists('ExtRun')) {
      scene.anims.create({
        key: 'ExtRun',
        frames: scene.anims.generateFrameNumbers('EXTmove', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1,
      });
    }
console.log('Animation created:', scene.anims.get('ExtRun'));
    }
  
    // Method to spawn the archer
    spawn() {
      
      if (this.direction === 'right') {
        this.setVelocityX(10); // Move right
        this.flipX=false;
        this.setOffset(8,-4)
      } else if (this.direction === 'left') {
        this.setVelocityX(-10); // Move left
        this.flipX=true;
        this.setOffset(60,-4)
      }
      this.setVisible(true);
      this.anims.play('ExtRun');
      this.originY=0
      this.setDepth(1);
      console.log(`Exterminator has been spawned with ${  this.health  } health, ${  this.damage  } damage, and ${  this.range  } range.`);
    }
  
    // Method for the archer to attack
    attack() {
      console.log(`Exterminator attacks with ${  this.damage  } damage.`);
    }
  
    // Method for the archer to take damage
    takeDamage(amount) {
      this.health -= amount;
      console.log(`Exterminator takes ${  amount  } damage. Health is now ${  this.health}`);
    }
  }