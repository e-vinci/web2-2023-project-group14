import Phaser from 'phaser';
// eslint-disable-next-line import/no-cycle
import { team1,team2 } from '../GameScene';

export default class Archer extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, team) {
      super(scene, x, y, 'archer');
      this.health = 100;
      this.damage = 10;
      this.range = 50;
      this.team=team;

    // Add this entity to the scene's physics
    scene.physics.world.enable(this);
    
    // Add this entity to the scene
    scene.add.existing(this);
    }
  
    // Method to spawn the archer
    spawn() {
      if (this.team === team1) {
        this.setVelocity(10);
      } else if (this.team === team2) {
        this.setVelocity(-10);
      }
      this.setVelocity(10);
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