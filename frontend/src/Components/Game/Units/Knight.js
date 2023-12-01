/* eslint-disable no-console */
import Phaser from 'phaser';




export default class Knight extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, direction) {
      super(scene, x, y, 'archer');
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

    if (!scene.anims.exists('KnighRun')) {
      scene.anims.create({
        key: 'KnighRun',
        frames: scene.anims.generateFrameNumbers('KnightRun', { start:0, end : 18}),
        frameRate: 15,
        repeat: -1,
      });
    }
console.log('Animation created:', scene.anims.get('KnighRun'));
    }
  
    // Method to spawn the archer
    spawn() {
      
      if (this.direction === 'right') {
        this.setVelocityX(10); // Move right
        this.flipX=false;
      } else if (this.direction === 'left') {
        this.setVelocityX(-10); // Move left
        this.flipX=true;
      }
      this.setVisible(true);
      this.anims.play('KnighRun');
      this.setOffset(130,50)
      this.setDepth(1);
      console.log(`Archer has been spawned with ${  this.health  } health, ${  this.damage  } damage, and ${  this.range  } range.`);
    }
  
    // Method for the archer to attack
    attack() {
      console.log(`Archer attacks with ${  this.damage  } damage.`);
    }
  
    // Method for the archer to take damage
    takeDamage(amount) {
      this.health -= amount;
      console.log(`Archer takes ${  amount  } damage. Health is now ${  this.health}`);
    }
  }