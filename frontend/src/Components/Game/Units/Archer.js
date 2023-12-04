import Phaser from 'phaser';

export default class Archer extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, direction) {
      super(scene, x, y, 'archer');
      this.health = 100;
      this.damage = 100;
      this.range = 40;
      this.direction=direction;
      this.speed = 100;
      this.attackCooldown = 2000;
      this.lastAttackTime = 0;
      this.attackAnimation = 'RedAttack';
      this.runAnim = 'ArcherRedRun'
     
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
      repeat: -1,
    });
  }

  if (!scene.anims.exists('RedDeath')){
  scene.anims.create({
    key: 'RedDeath',
    frames: scene.anims.generateFrameNumbers('ArcherAll', { start:120, end : 127}),
    frameRate: 8,
    repeat: 1,
  });
  }

console.log('Animation created:', scene.anims.get('ArcherRedRun'));
console.log('Animation created:', scene.anims.get('RedAttack'));
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
      // Vérifiez si l'archer est en train d'attaquer et arrêtez le mouvement
      if (this.isAttacking) {
        this.setVelocityX(0);
      }
    }
  
    // Method for the archer to attack
    attackTarget(target) {
      if (target && target.health > 0) {
        // L'ennemi est à portée, effectuez l'attaque
        this.isAttacking = true;
        this.attackTimer.paused = true;
        this.setVelocityX(0);
        this.anims.play('RedAttack');
    
        target.takeDamage(this.damage);
        this.scene.time.delayedCall(this.attackCooldown, () => {
          this.isAttacking = false;
          this.attackTimer.paused = false;
          console.log(`Archer attacks with ${this.damage} damage.`);
        });
      } else {
        // Pas d'ennemi valide à portée pour l'attaque
        this.isAttacking = false;
        this.anims.play('ArcherRedRun');
        console.log('No valid target in range for attack');
      }
    }

    takeDamage(damage){
      this.health-=damage;
      console.log("attack")
    }
  }
  