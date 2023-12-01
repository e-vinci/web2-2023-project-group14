import Phaser from 'phaser';




export default class Warrior extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, direction) {
      super(scene, x, y, 'NightBorn');
      this.health = 100;
      this.damage = 10;
      this.range = 50;
      this.speed= 15;
      this.direction=direction;
      this.living=true;
     
    // Add this entity to the scene's physics
  
    scene.physics.world.enable(this);
    
    // Add this entity to the scene
    scene.add.existing(this);

    // Archer Run Animation Creation

    if (!scene.anims.exists('NecRun')) {
      // Necro Run Animation Creation
  scene.anims.create({
    key: 'NecRun',
    frames: scene.anims.generateFrameNumbers('NightBorne', { start: 23, end: 28 }),
    frameRate: 10,
    repeat: -1,
  });
    }
console.log('Animation created:', scene.anims.get('NecRun'));
    }
  
    // Method to spawn the archer
    spawn() {
      
      if (this.direction === 'right') {
        this.setVelocityX(this.speed); // Move right
        this.flipX=false;
      } else if (this.direction === 'left') {
        this.setVelocityX(-this.speed); // Move left
        this.flipX=true;
      }
      this.setVisible(true);
      this.anims.play('NecRun');
      this.setOffset(27,30)
      this.setDepth(1);
      console.log(`Warrior has been spawned with ${  this.health  } health, ${  this.damage  } damage, and ${  this.range  } range.`);
    }
  
    // Method for the archer to attack
    attack(target) {
      if(target.living) {
        target.takeDamage(this.damage);
      console.log(`Archer attacks with ${  this.damage  } damage.`);
    }
    }
    // Method for the archer to take damage

    takeDamage(amount) {
      this.health -= amount;
      if(this.health <= 0) {
        this.health = 0;
        this.living = false;
        this.visible = false;  // this will hide the dead unit
      console.log(`Warrior takes ${  amount  } damage. Health is now ${  this.health}`);
    }
  }
}