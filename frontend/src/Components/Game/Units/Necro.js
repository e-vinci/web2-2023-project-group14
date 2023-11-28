import Phaser from 'phaser';




export default class Necro extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, direction) {
      super(scene, x, y, 'NEC');
      this.health = 100;
      this.damage = 10;
      this.range = 50;
      this.direction=direction;
     
    // Add this entity to the scene's physics
  
    scene.physics.world.enable(this);
    
    // Add this entity to the scene
    scene.add.existing(this);

    // Archer Run Animation Creation

    if (!scene.anims.exists('NecRun')) {
      // Necro Run Animation Creation
  scene.anims.create({
    key: 'NecRun',
    frames: scene.anims.generateFrameNumbers('NecroAll', { start: 17, end: 24 }),
    frameRate: 10,
    repeat: -1,
  });
    }
console.log('Animation created:', scene.anims.get('NecRun'));
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
      this.anims.play('NecRun');
      this.setOffset(65,75)
      this.setDepth(1);
      console.log(`Necro has been spawned with ${  this.health  } health, ${  this.damage  } damage, and ${  this.range  } range.`);
    }
  
    // Method for the archer to attack
    attack() {
      console.log(`necro attacks with ${  this.damage  } damage.`);
    }
  
    // Method for the archer to take damage
    takeDamage(amount) {
      this.health -= amount;
      console.log(`necro takes ${  amount  } damage. Health is now ${  this.health}`);
    }
  }