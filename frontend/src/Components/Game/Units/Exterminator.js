/* eslint-disable no-console */
import Phaser from 'phaser';




export default class Exterminator extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, direction) {
      super(scene, x, y, 'EXT');
      this.health = 50;
      this.damage = 10;
      this.range = 50;
      this.speed = 10;
      this.direction=direction;
      this.hasSpawned = false;
      this.isDead=false;
     
    // Add this entity to the scene's physics
  
    scene.physics.world.enable(this);
    
    // Add this entity to the scene
    scene.add.existing(this);

    // Exterminator Animation Creation

    if (!scene.anims.exists('ExtRun')) {
      scene.anims.create({
        key: 'ExtRun',
        frames: scene.anims.generateFrameNumbers('EXTmove', { start: 0, end: 7 }),
        frameRate: 10,
        repeat: -1,
      });
    }
    if (!scene.anims.exists('ExtAttack')){
      scene.anims.create({
        key: 'ExtAttack',
        frames: scene.anims.generateFrameNumbers('EXTattack', { start: 0, end: 4 }),
        frameRate: 7,
        repeat: 0,
      });
    }
    if (!scene.anims.exists('ExtDeath')){
    scene.anims.create({
      key: 'ExtDeath',
      frames: scene.anims.generateFrameNumbers('EXTdeath', { start: 0, end: 5 }),
      frameRate: 7,
      repeat: 0,
    });
  }

console.log('Animation created:', scene.anims.get('ExtRun'));
console.log('Animation created:', scene.anims.get('ExtAttack'));
console.log('Animation created:', scene.anims.get('ExtDeath'));
    }
  
    // Method to spawn the exterminator
    spawn() {
      this.setVisible(true);
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
  
    // Method for the Exterminator to attack
    attackTarget(target) {
      if (!this.isDead && target && !target.isDead) {
        const distanceToTarget = Phaser.Math.Distance.Between(this.x, this.y, target.x, target.y);
    
        if (distanceToTarget <= this.range) {
          this.setVelocityX(0); // Stop moving
          this.setVelocityY(0);
    
          // Only start the attack animation if it's not already playing
          if (!this.anims.isPlaying || this.anims.currentAnim.key !== 'ExtAttack') {
            this.anims.play('ExtAttack').chain('ExtRun');
    
            this.once('animationcomplete', () => {
              // eslint-disable-next-line prefer-const
              this.scene.sound.play('laserSound');
              
              target.takeDamage(this.damage);
    
              if (!target.isDead && target.health > 0) {
                // If the target is still alive, attack again
                this.attackTarget(target);
              } else {
                // If the target is dead, stop the 'ExtAttack' animation
                this.anims.stop('ExtAttack');
              }
            });
          }
        }
      }
    }
  
    // Method for the archer to take damage
    takeDamage(damage) {
      console.log("i take damage EXT");
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
    
        this.anims.play('ExtDeath');
    
        this.once('animationcomplete', () => {
          // Use the remove method of Physics.Arcade.Group or Physics.Arcade.StaticGroup
          this.scene.physics.add.group().remove(this);
          this.destroy();
          console.log('EXT has died.');
        });
      }
    }
  }