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
import necroSpriteSheet from '../../assets/sprites/NecroSprites/NecroAll.png';


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
      scene.load.spritesheet('NightBorne', warriorSpriteSheet, {
        frameWidth: 80,
        frameHeight: 80,
      });
      // Exterminator Loads
      scene.load.spritesheet('EXTmove', extMoveSpriteSheet, {
        frameWidth: 100,
        frameHeight: 26,
      });
      scene.load.spritesheet('EXTdeath', extDeathSpriteSheet, {
        frameWidth: 100,
        frameHeight: 26,
      });
      scene.load.spritesheet('EXTattack', extAttackSpriteSheet, {
        frameWidth: 100,
        frameHeight: 26,
      });
  }




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
  
  
}

export function createEXTAnim(scene) {
  // Creates de Exterminator

    // Exterminator move animation

   

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

   

}