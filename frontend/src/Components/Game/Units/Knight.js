/* eslint-disable no-console */
import Phaser from 'phaser';




export default class Knight extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, direction) {
      super(scene, x, y, 'archer');
      this.health = 1000;
      this.damage = 15;
      this.direction=direction;
      this.range = 70;
      this.speed = 20;
      this.hasSpawned = false;
      this.isDead=false;
     
    // Add this entity to the scene's physics
  
    scene.physics.world.enable(this);
    
    // Add this entity to the scene
    scene.add.existing(this);

    // Knight Animation Creation

    if (!scene.anims.exists('KnighRun')) {
      scene.anims.create({
        key: 'KnighRun',
        frames: scene.anims.generateFrameNumbers('KnightRun', { start:0, end : 18}),
        frameRate: 10,
        repeat: -1,
      });
    }

    if (!scene.anims.exists('KnighAttack')){
      scene.anims.create({
        key: 'KnighAttack',
        frames: scene.anims.generateFrameNumbers('KnightAttack', { start: 0, end: 17 }),
        frameRate: 14,
        repeat: 0,
      });
    }

    if (!scene.anims.exists('KnighDeath')){
      scene.anims.create({
        key: 'KnighDeath',
        frames: scene.anims.generateFrameNumbers('KnightDeath', { start: 0, end: 12 }),
        frameRate: 10,
        repeat: 0,
      });
    }

console.log('Animation created:', scene.anims.get('KnighRun'));
console.log('Animation created:', scene.anims.get('KnighAttack'));
console.log('Animation created:', scene.anims.get('KnighDeath'));

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
    attackTarget(target) {
      if (!this.isDead && target && !target.isDead) {
        const distanceToTarget = Phaser.Math.Distance.Between(this.x, this.y, target.x, target.y);
    
        if (distanceToTarget <= this.range) {
          this.setVelocityX(0); // Stop moving
          this.setVelocityY(0);
    
          // Only start the attack animation if it's not already playing
          if (!this.anims.isPlaying || this.anims.currentAnim.key !== 'KnighAttack') {
            this.anims.play('KnighAttack').chain('KnighRun');
    
            this.once('animationcomplete', () => {
              // eslint-disable-next-line prefer-const
              this.scene.sound.play('swordSound');
              
              target.takeDamage(this.damage);
    
              if (!target.isDead && target.health > 0) {
                // If the target is still alive, attack again
                this.attackTarget(target);
              } else {
                // If the target is dead, stop the 'RedAttack' animation
                this.anims.stop('KnighAttack');
              }
            });
          }
        }
      }
    }
  
    // Method for the knight to take damage
    takeDamage(damage) {
      console.log("i take damagseKNGTH");
      if (!this.isDead) {
        this.health -= damage;
        if (this.health <= 0) {
          this.health = 0;
        }
      }
    }


    die() {
      if (!this.isDead) {
        this.setImmovable(true); // Makes the unit immovable
        this.isDead = true;
        this.body.checkCollision.none = true; // Disables collisions
    
        this.anims.play('KnighDeath');
        this.setVelocityX(0); // Stop moving
        this.setVelocityY(0);
    
        this.once('animationcomplete', () => {
          // Use the remove method of Physics.Arcade.Group or Physics.Arcade.StaticGroup
          this.scene.physics.add.group().remove(this);
          this.destroy();
          console.log('Knight has died.');
        });
      }
    }
  }