import Phaser from 'phaser';

export default class Archer extends Phaser.Physics.Arcade.Sprite{
    constructor(scene, x, y, direction) {
      super(scene, x, y, 'archer');
      this.health = 100;
      this.damage = 0.5;
      this.range = 50;
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
  
    attackTarget(target) {
      if (this.isDead || !target || target.isDead) {
        return; // Ne pas attaquer si l'attaquant ou la cible est déjà mort
      }
    
      const distanceToTarget = Phaser.Math.Distance.Between(this.x, this.y, target.x, target.y);
    
      if (distanceToTarget <= this.range) {
        // L'ennemi est à portée, effectuer l'attaque
        this.setVelocityX(0); // Arrêter le mouvement
    
        // Jouer l'animation 'RedAttack' et chaîner l'animation 'ArcherRedRun'
        this.anims.play('RedAttack').chain('ArcherRedRun');
    
        // Infliger des dégâts à la cible
        target.takeDamage(this.damage);
      }
    
      // Vérifier si la cible est morte
      if (target.isDead || target.health <= 0) {
        // Si la cible est morte, arrêter l'animation 'RedAttack'
        this.anims.stop('RedAttack');
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
        this.setImmovable(true); // Rend l'unité immobile
        this.anims.play('RedDeath');
    
        this.once('animationcomplete', () => {
          this.setVisible(false).setActive(false);
          this.destroy();
          console.log('Archer has died.');
        });
      }
    }
  }
  