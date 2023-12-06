import Phaser from 'phaser';




export default class Warrior extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, direction) {
      super(scene, x, y, 'NightBorn');
      this.health = 50;
      this.damage = 50;
      this.range = 40;
      this.speed = 50;
      this.direction=direction;
      this.hasSpawned = false;
      this.isDead=false;
     
    // Add this entity to the scene's physics
  
    scene.physics.world.enable(this);
    
    // Add this entity to the scene
    scene.add.existing(this);

    // Warrior Animation Creation

    if (!scene.anims.exists('WarriorRun')) {
      
      scene.anims.create({
        key: 'WarriorRun',
        frames: scene.anims.generateFrameNumbers('NightBorne', { start: 23, end: 28 }),
        frameRate: 10,
        repeat: -1,
      });
    }

    if (!scene.anims.exists('WarriorHit')){
      scene.anims.create({
        key: 'WarriorHit',
        frames: scene.anims.generateFrameNumbers('NightBorne', { start: 46, end: 57 }),
        frameRate: 15,
        repeat: 0,
      });
    }
    if (!scene.anims.exists('WarriorDeath')){
      scene.anims.create({
        key: 'WarriorDeath',
        frames: scene.anims.generateFrameNumbers('NightBorne', { start: 70, end: 75 }),
        frameRate: 10,
        repeat: 0,
      });
    }
console.log('Animation created:', scene.anims.get('WarriorRun'));
console.log('Animation created:', scene.anims.get('WarriorHit'));    
console.log('Animation created:', scene.anims.get('WarriorDeath')); 

}
  
    // Method to spawn the warrior
    spawn() {
      
      if (this.direction === 'right') {
        this.setVelocityX(this.speed); // Move right
        this.flipX=false;
      } else if (this.direction === 'left') {
        this.setVelocityX(-this.speed); // Move left
        this.flipX=true;
      }
      this.setVisible(true);
      this.anims.play('WarriorRun');
      this.setOffset(27,30)
      this.setDepth(1);
      console.log(`Warrior has been spawned with ${  this.health  } health, ${  this.damage  } damage, and ${  this.range  } range.`);
    }
  
    // Method for the warrior to attack
    attackTarget(target) {
      if (!this.isDead && target && !target.isDead) {
        const distanceToTarget = Phaser.Math.Distance.Between(this.x, this.y, target.x, target.y);
    
        if (distanceToTarget <= this.range) {
          this.setVelocityX(0); // Stop moving
          this.setVelocityY(0);
    
          // Only start the attack animation if it's not already playing
          if (!this.anims.isPlaying || this.anims.currentAnim.key !== 'WarriorHit') {
            this.anims.play('WarriorHit').chain('WarriorRun');
    
            this.once('animationcomplete', () => {
              // eslint-disable-next-line prefer-const
              this.scene.sound.play('lightsaberSound');
              
              target.takeDamage(this.damage);
    
              if (!target.isDead && target.health > 0) {
                // If the target is still alive, attack again
                this.attackTarget(target);
              } else {
                // If the target is dead, stop the 'ExtAttack' animation
                this.anims.stop('WarriorHit');
              }
            });
          }
        }
      }
    }
    // Method for the archer to take damage

    takeDamage(damage) {
      console.log("i take damagse WAR");
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
        this.body.checkCollision.none = true; // Disables collisions
    
        this.anims.play('WarriorDeath');
        this.setVelocityX(0); // Stop moving
        this.setVelocityY(0);
    
        this.once('animationcomplete', () => {
          // Use the remove method of Physics.Arcade.Group or Physics.Arcade.StaticGroup
          this.scene.physics.add.group().remove(this);
          this.destroy();
          console.log('Warrior has died.');
        });
      }
    }

}