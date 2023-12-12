import Phaser from 'phaser';




export default class Necro extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, direction) {
      super(scene, x, y, 'NEC');
      this.health = 40;
      this.damage = 50;
      this.range = 120;
      this.speed = 20;
      this.direction=direction;
      this.hasSpawned = false;
      this.isDead=false;
     
    // Add this entity to the scene's physics
  
    scene.physics.world.enable(this);
    
    // Add this entity to the scene
    scene.add.existing(this);

    
  if (!scene.anims.exists('NecroRun')) {  
  scene.anims.create({
    key: 'NecroRun',
    frames: scene.anims.generateFrameNumbers('NecroAll', { start: 17, end: 24 }),
    frameRate: 10,
    repeat: 1,
  });
    }

    if (!scene.anims.exists('NecDeath')) {  
      scene.anims.create({
        key: 'NecDeath',
        frames: scene.anims.generateFrameNumbers('NecroAll', { start: 102, end: 111 }),
        frameRate: 10,
        repeat: 0,
      });
    }
  
    
    if (!scene.anims.exists('NecAttack')){
      scene.anims.create({
        key: 'NecAttack',
        frames: scene.anims.generateFrameNumbers('NecroAll', { start: 34, end: 46 }),
        frameRate: 10,
        repeat: 0,
      });
    }  
console.log('Animation created:', scene.anims.get('NecroRun'));
console.log('Animation created:', scene.anims.get('NecDeath'));
console.log('Animation created:', scene.anims.get('NecAttack'));



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
  
    // Method for the necro to attack
   
    attackTarget(target) {
      if (!this.isDead && target && !target.isDead) {
        const distanceToTarget = Phaser.Math.Distance.Between(this.x, this.y, target.x, target.y);
    
        if (distanceToTarget <= this.range) {
          this.setVelocityX(0); // Stop moving
          this.setVelocityY(0);
    
          // Only start the attack animation if it's not already playing
          if (!this.anims.isPlaying || this.anims.currentAnim.key !== 'NecAttack') {
            this.anims.play('NecAttack').chain('NecroRun');
    
            this.once('animationcomplete', () => {
              // eslint-disable-next-line prefer-const
              this.scene.sound.play('magicSound');
              
              target.takeDamage(this.damage);
    
              if (!target.isDead && target.health > 0) {
                // If the target is still alive, attack again
                this.attackTarget(target);
              } else {
                // If the target is dead, stop the 'ExtAttack' animation
                this.anims.stop('NecAttack');
              }
            });
          }
        }
      }
    }
  
    // Method for the necro to take damage
    takeDamage(damage) {
      console.log("i take damagse NEC");
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
    
        this.anims.play('NecDeath');
    
        this.once('animationcomplete', () => {
          // Use the remove method of Physics.Arcade.Group or Physics.Arcade.StaticGroup
          this.scene.physics.add.group().remove(this);
          this.destroy();
          console.log('NEC has died.');
        });
      }
    }
  }