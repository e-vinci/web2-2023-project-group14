import Phaser from 'phaser';

export default class PlayerBase extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y) {
      super(scene, x, y, 'Base');
      this.health = 100;
      this.speed = 0;
     
    // Add this entity to the scene's physics
    scene.physics.world.enable(this);
    
    // Set the size of the body
    this.body.setSize(80, 300);
    
    // Add this entity to the scene
    scene.add.existing(this);

    // rendre base immuable

    this.body.immovable = true;
    
    // Base Floating Animation Creation
    if (!scene.anims.exists('baseFloating')) {
        scene.anims.create({
            key: 'baseFloating',
            frames: scene.anims.generateFrameNumbers('base', { start: 0, end: 12 }),
            frameRate: 10,
            repeat: -1,
        });
    }
  }

  // Method to spawn the base
  spawn() {
    const scaleFactor = 0.5;
    if (this.direction === 'right') {
      this.flipX=true;
    } else if (this.direction === 'left') {
      this.flipX=false
    }
    this.setVisible(true);
    
    this.anims.play('baseFloating');
    this.setOffset(60,65)
    this.setScale(scaleFactor).setDepth(1).setDepth(1);

    console.log(`Base has been spawned with ${  this.health  } health`);
  }

  // Method for the base to take damage
  takeDamage(amount) {
    this.health -= amount;
    console.log(`Base takes ${  amount  } damage. Health is now ${  this.health}`);
  }
}
