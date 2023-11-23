/* eslint-disable no-param-reassign */
// Warrior import
import warriorSpriteSheet from '../../assets/sprites/NightborneSprites/NightBorne.png';

// Exterminator import
import extMoveSpriteSheet from '../../assets/sprites/ExterminatorSprites/EXTmove.png';
import extDeathSpriteSheet from '../../assets/sprites/ExterminatorSprites/EXTdeath.png';
import extAttackSpriteSheet from '../../assets/sprites/ExterminatorSprites/EXTattack.png';

// Knight Import
import knightRunSpriteSheet from '../../assets/sprites/KnightSprites/KnightRun.png';
import knightAttackSpriteSheet from '../../assets/sprites/KnightSprites/KnightAttack.png';
import knightDeathSpriteSheet from '../../assets/sprites/KnightSprites/KnightDeath.png';

// Necro Import
import necroSpriteSheet from '../../assets/sprites/NecroSprites/Necro.png';


// Archer Import
import redSpriteSheet from '../../assets/sprites/RedSprites/Archer.png';


export function preloadSpriteSheets(scene) {
    // Archer Loads

    scene.load.spritesheet('ArcherAll', redSpriteSheet, {
        frameWidth: 112,
        frameHeight: 133,
      });
  
      // Necro Loads
      scene.load.spritesheet('NecroAll', necroSpriteSheet, {
        frameWidth: 160,
        frameHeight: 128,
      });
      
  
      // Knight Loads
      scene.load.spritesheet('KnightAttack', knightAttackSpriteSheet, {
        frameWidth: 288,
        frameHeight: 114,
      });
      scene.load.spritesheet('KnightRun', knightRunSpriteSheet, {
        frameWidth: 288,
        frameHeight: 90,
      });
      scene.load.spritesheet('KnightDeath', knightDeathSpriteSheet, {
        frameWidth: 288,
        frameHeight: 80,
      });
  
      // Warrior Loads
      scene.load.spritesheet('NightBorneAll', warriorSpriteSheet, {
        frameWidth: 80,
        frameHeight: 80,
      });
      // Exterminator Loads
      scene.load.spritesheet('ExterminatorMove', extMoveSpriteSheet, {
        frameWidth: 100,
        frameHeight: 26,
      });
      scene.load.spritesheet('ExterminatorDeath', extDeathSpriteSheet, {
        frameWidth: 100,
        frameHeight: 26,
      });
      scene.load.spritesheet('ExterminatorAttack', extAttackSpriteSheet, {
        frameWidth: 100,
        frameHeight: 26,
      });
  }



export function createArcherAnim(scene) {
    // Archer Creates
// Archer Run Animation Creation

scene.anims.create({
    key: 'RedRun',
    frames: scene.anims.generateFrameNumbers('ArcherAll', { start:0, end : 24}),
    frameRate: 15,
    repeat: -1,
  });
  
  const ar = scene.add.sprite(600, 400, 'ArcherAll');
  ar.play('RedRun').setDepth(1);
  
  // Archer Attack Animation Creation
  
  scene.anims.create({
    key: 'RedAttack',
    frames: scene.anims.generateFrameNumbers('ArcherAll', { start:25, end : 34}),
    frameRate: 15,
    repeat: -1,
  });
  
  const ar2 = scene.add.sprite(650, 400, 'ArcherAll');
  ar2.play('RedAttack').setDepth(1);
  
  
  // Archer Death Animation Creation
  
  scene.anims.create({
    key: 'RedDeath',
    frames: scene.anims.generateFrameNumbers('ArcherAll', { start:120, end : 127}),
    frameRate: 8,
    repeat: -1,
  });
  
  const ar3 = scene.add.sprite(700, 400, 'ArcherAll');
  ar3.play('RedDeath').setDepth(1);
    };


export function createNecroAnim(scene){
// Necro Creates
// Necro Attack Animation Creation
scene.anims.create({
    key: 'NecAttack',
    frames: scene.anims.generateFrameNumbers('NecroAll', { start: 34, end: 46 }),
    frameRate: 10,
    repeat: -1,
  });
  // Necro Death Animation Creation
  scene.anims.create({
    key: 'NecDeath',
    frames: scene.anims.generateFrameNumbers('NecroAll', { start: 102, end: 113 }),
    frameRate: 10,
    repeat: -1,
  });
  // Necro Run Animation Creation
  scene.anims.create({
    key: 'NecRun',
    frames: scene.anims.generateFrameNumbers('NecroAll', { start: 17, end: 24 }),
    frameRate: 10,
    repeat: -1,
  });
  scene.necro = scene.physics.add.sprite(450, 300, 'NecroRun');
  scene.necro.x=450;
  scene.necro.setInteractive(scene.input.makePixelPerfect());
  scene.necro.play('NecRun').setDepth(1);
  
  const nc2 = scene.add.sprite(500, 300, 'NecroDeath');
  nc2.play('NecDeath').setDepth(1);
 
  
  const nc3 = scene.add.sprite(550, 300, 'NecroAttack');
  nc3.play('NecAttack').setDepth(1);
}


export function createKnightAnim(scene){
// Knight Creates
// Knight Attack Animation Creation
scene.anims.create({
    key: 'KnighAttack',
    frames: scene.anims.generateFrameNumbers('KnightAttack', { start: 0, end: 17 }),
    frameRate: 14,
    repeat: -1,
});
    // Knight Run Animation Creation
scene.anims.create({
    key: 'KnighRun',
    frames: scene.anims.generateFrameNumbers('KnightRun', { start: 0, end: 8 }),
    frameRate: 10,
    repeat: -1,
});
  
    // Knight Run Animation Creation
scene.anims.create({
    key: 'KnighDeath',
    frames: scene.anims.generateFrameNumbers('KnightDeath', { start: 0, end: 12 }),
    frameRate: 10,
    repeat: -1,
});
const kn = scene.add.sprite(300, 200, 'KnightRun');
kn.play('KnighRun').setDepth(1);
  
const kn2 = scene.add.sprite(360, 200, 'KnightAttack');
kn2.play('KnighAttack').setDepth(1);
    
const kn3 = scene.add.sprite(450, 200, 'KnightDeath');
kn3.play('KnighDeath').setDepth(1);
  

}


export function createWarriorAnim(scene) {
    // Warrior Creates

    // Warrior Run Animation Creation
    scene.anims.create({
        key: 'WarriorRun',
        frames: scene.anims.generateFrameNumbers('NightBorneAll', { start: 23, end: 28 }),
        frameRate: 10,
        repeat: -1,
      });
  
      // Warrior Hit Animation Creation
      scene.anims.create({
        key: 'WarriorHit',
        frames: scene.anims.generateFrameNumbers('NightBorneAll', { start: 46, end: 57 }),
        frameRate: 15,
        repeat: -1,
      });
  
      // Warrior Death Animation Creation
      scene.anims.create({
        key: 'WarriorDeath',
        frames: scene.anims.generateFrameNumbers('NightBorneAll', { start: 93, end:  116}),
        frameRate: 7,
        repeat: -1,
      });
  
      // Instances de warrior
  
      // eslint-disable-next-line prefer-const
      let warrior = scene.add.sprite(100, 250, 'NightBorneAll');
      warrior.play('WarriorRun').setDepth(1);
  
      // eslint-disable-next-line prefer-const
      let warrior2 = scene.add.sprite(150, 250, 'NightBorneall');
      warrior2.play('WarriorHit').setDepth(1);
  
      // eslint-disable-next-line prefer-const
      let warrior3 = scene.add.sprite(200, 250, 'NightBorneAll');
      warrior3.play('WarriorDeath').setDepth(1);
  
}

export function createEXTAnim(scene) {
  // Creates de Exterminator

    // Exterminator move animation

    scene.anims.create({
      key: 'ExtMove',
      frames: scene.anims.generateFrameNumbers('ExterminatorMove', { start: 0, end: 7 }),
      frameRate: 10,
      repeat: -1,
    });

    // Exterminator Death animation

    scene.anims.create({
      key: 'ExtDeath',
      frames: scene.anims.generateFrameNumbers('ExterminatorDeath', { start: 0, end: 5 }),
      frameRate: 7,
      repeat: -1,
    });

    // Exterminator Attack Animation

    scene.anims.create({
      key: 'ExtAttack',
      frames: scene.anims.generateFrameNumbers('ExterminatorAttack', { start: 0, end: 4 }),
      frameRate: 7,
      repeat: -1,
    });

    // Instances de Exterminator
    // eslint-disable-next-line prefer-const
    let ext = scene.add.sprite(300, 300, 'ExterminatorMove');
    ext.play('ExtMove').setDepth(1);

    // eslint-disable-next-line prefer-const
    let ext2 = scene.add.sprite(300, 350, 'ExterminatorDeath');
    ext2.play('ExtDeath').setDepth(1);

    // eslint-disable-next-line prefer-const
    let ext3 = scene.add.sprite(300, 400, 'ExterminatorAttack');
    ext3.play('ExtAttack').setDepth(1);

}