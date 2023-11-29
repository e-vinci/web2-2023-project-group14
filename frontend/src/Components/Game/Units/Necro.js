import Phaser from 'phaser';




export default class Necro extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, direction) {
      super(scene, x, y, 'NEC');
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

    if (!scene.anims.exists('NecroRun')) {
      // Necro Run Animation Creation
  scene.anims.create({
    key: 'NecroRun',
    frames: scene.anims.generateFrameNumbers('NecroAll', { start: 17, end: 24 }),
    frameRate: 10,
    repeat: -1,
  });
    }
console.log('Animation created:', scene.anims.get('NecroRun'));
    }
  
    // Method to spawn the archer
    spawn() {
      
     
      this.setVisible(true);
      
      this.setOffset(65,75)
      this.setDepth(1);
      this.anims.play('NecroRun');
      if (this.direction === 'right') {
        this.setVelocityX(10); // Move right
        this.flipX=false;
      } else if (this.direction === 'left') {
        this.setVelocityX(-10); // Move left
        this.flipX=true;
      }
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