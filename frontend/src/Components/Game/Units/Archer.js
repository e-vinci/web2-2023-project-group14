import Phaser from 'phaser';
// eslint-disable-next-line import/no-cycle


export default class Archer extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, direction) {
      super(scene, x, y, 'archer');
      this.health = 100;
      this.damage = 10;
      this.range = 50;
      this.direction=direction;

    // Add this entity to the scene's physics
    scene.physics.world.enable(this);
    
    // Add this entity to the scene
    scene.add.existing(this);
    }
  
    // Method to spawn the archer
    spawn() {
      
      if (this.direction === 'right') {
        this.setVelocityX(10); // Move right
      } else if (this.direction === 'left') {
        this.setVelocityX(-10); // Move left
      }
      this.setVisible(true);
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