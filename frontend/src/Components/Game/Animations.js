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


 // eslint-disable-next-line import/prefer-default-export
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





