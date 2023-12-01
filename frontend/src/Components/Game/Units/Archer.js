import Phaser from 'phaser';




export default class Archer extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, direction) {
      super(scene, x, y, 'archer');
      this.health = 100;
      this.damage = 100;
      this.range = 50;
      this.direction=direction;
      this.speed = 100;
      this.attackCooldown = 2000;
      this.lastAttackTime = 0;
     
    // Add this entity to the scene's physics
  
    scene.physics.world.enable(this);
    
    // Add this entity to the scene
    scene.add.existing(this);

    // Archer Run Animation Creation

    if (!scene.anims.exists('ArcherRedRun')) {
      scene.anims.create({
        key: 'ArcherRedRun',
        frames: scene.anims.generateFrameNumbers('ArcherAll', { start:0, end : 18}),
        frameRate: 15,
        repeat: -1,
      });
    }
console.log('Animation created:', scene.anims.get('ArcherRedRun'));
    }
  
    // Method to spawn the archer
    spawn() {
      
      if (this.direction === 'right') {
        this.setVelocityX(10); // Move right
        this.flipX=true;
      } else if (this.direction === 'left') {
        this.setVelocityX(-10); // Move left
        this.flipX=false
      }
      this.setVisible(true);
      this.anims.play('ArcherRedRun');
      this.setOffset(40,65)
      this.setDepth(1);
      console.log(`Archer has been spawned with ${  this.health  } health, ${  this.damage  } damage, and ${  this.range  } range.`);

     
      this.attackTimer = this.scene.time.addEvent({
        delay: this.attackCooldown,
        callback: () => {
          this.attackTarget();
        },
        loop: true,
      });
    }
  
    update() {
      if (this.health <= 0) {
        this.die();
      }
  
      // Vérifiez si l'archer est en train d'attaquer et arrêtez le mouvement
      if (this.isAttacking) {
        this.setVelocityX(0);
      }
    }
  
    // Method for the archer to attack
    attackTarget(target) {
      if (target) {
        console.log(`Attack target called with target: ${target}`);
      } else {
        console.log('No valid target for attack');
      }
      console.log(`Attack target called with target: ${target}`);
      if (target && Phaser.Math.Distance.Between(this.x, this.y, target.x, target.y) <= this.range) {
        // L'ennemi est à portée, effectuez l'attaque
        console.log('Enemy is in range for attack');
        this.isAttacking = true;
        this.attackTimer.paused = true;
        this.setVelocityX(0);
        this.anims.stop('ArcherRedRun');
  
        target.takeDamage(this.damage);
        this.scene.time.delayedCall(this.attackCooldown, () => {
          this.isAttacking = false;
          this.attackTimer.paused = false;
          this.anims.play('ArcherRedRun');
        });
        console.log(`Archer attacks with ${this.damage} damage.`);
      } else {
        console.log('No valid target in range for attack');
      }
    }
  
  
    // Method for the archer to take damage
    takeDamage(amount) {
      this.health -= amount;
      console.log(`Archer takes ${  amount  } damage. Health is now ${  this.health}`);
    }

    die() {
      this.setActive(false).setVisible(false);
      this.destroy();
      console.log('Archer has died.');
    }
  }
  