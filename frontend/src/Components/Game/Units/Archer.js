import Phaser from 'phaser';

export default class Archer extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, direction) {
      super(scene, x, y, 'archer');
      this.health = 100;
      this.damage = 30;
      this.range = 200;
      this.direction=direction;
      this.speed = 10;
      this.hasSpawned = false;
      this.isDead=false;
      // Add this entity to the scene's physics
  
    scene.physics.world.enable(this);
    
    // Add this entity to the scene
    scene.add.existing(this);

    // Archer Animation Creation

    if (!scene.anims.exists('ArcherRedRun')) {
      scene.anims.create({
        key: 'ArcherRedRun',
        frames: scene.anims.generateFrameNumbers('ArcherAll', { start:0, end : 18}),
        frameRate: 15,
        repeat: -1,
      });
    }
    if (!scene.anims.exists('RedAttack')){
    scene.anims.create({
      key: 'RedAttack',
      frames: scene.anims.generateFrameNumbers('ArcherAll', { start:25, end : 34}),
      frameRate: 15,
      repeat: 0,
    });
  }

  if (!scene.anims.exists('RedDeath')){
  scene.anims.create({
    key: 'RedDeath',
    frames: scene.anims.generateFrameNumbers('ArcherAll', { start:120, end : 127}),
    frameRate: 8,
    repeat: 0,
  });
  }

console.log('Animation created:', scene.anims.get('ArcherRedRun'));
console.log('Animation created:', scene.anims.get('RedAttack'));
console.log('Animation created:', scene.anims.get('RedDeath'));
    }

    // Method to spawn the archer
    spawn() {
    
      this.setVisible(true);
      if (this.direction === 'right') {
        this.setVelocityX(10); // Move right
        this.flipX=true;
      } else if (this.direction === 'left') {
        this.setVelocityX(-10); // Move left
        this.flipX=false
      }
      
      this.anims.play('ArcherRedRun');
      this.setOffset(40,65)
      this.setDepth(1);
      console.log(`Archer has been spawned with ${  this.health  } health, ${  this.damage  } damage, and ${  this.range  } range.`);
    }
  
    
  
    attackTarget(target) {
      if (!this.isDead && target && !target.isDead) {
        const distanceToTarget = Phaser.Math.Distance.Between(this.x, this.y, target.x, target.y);
    
        if (distanceToTarget <= this.range) {
          this.setVelocityX(0); // Stop moving
          this.setVelocityY(0);
    
          // Only start the attack animation if it's not already playing
          if (!this.anims.isPlaying || this.anims.currentAnim.key !== 'RedAttack') {
            this.anims.play('RedAttack').chain('ArcherRedRun');
    
            this.once('animationcomplete', () => {
              // eslint-disable-next-line prefer-const
              this.scene.sound.play('arrowSound');
              
              target.takeDamage(this.damage);
    
              if (!target.isDead && target.health > 0) {
                // If the target is still alive, attack again
                this.attackTarget(target);
              } else {
                // If the target is dead, stop the 'RedAttack' animation
                this.anims.stop('RedAttack');
              }
            });
          }
        }
      }
    }
    
    
    
    takeDamage(damage) {
      console.log("i take damagse");
      if (!this.isDead) {
        this.health -= damage;
    
        if (this.health <= 0) {
          this.health = 0;
         
        }
      }
    }

    die() {
      if (!this.isDead) {
        this.isDead = true;
        this.setImmovable(true); // Makes the unit immovable
        this.setVelocityX(0); // Stop moving
        this.setVelocityY(0);
        this.body.checkCollision.none = true; // Disables collisions
    
        this.anims.play('RedDeath');
    
        this.once('animationcomplete', () => {
          // Use the remove method of Physics.Arcade.Group or Physics.Arcade.StaticGroup
          this.scene.physics.add.group().remove(this);
          this.destroy();
          console.log('Archer has died.');
        });
      }
    }

  }
  