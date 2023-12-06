/* eslint-disable import/no-named-as-default */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable prefer-const */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
import Phaser from 'phaser';
import music from '../../assets/audio/theme_musics/C418 - Aria Math.mp3';
import soundOnAsset from '../../assets/soundOn.png';
import soundOffAsset from '../../assets/soundOff.png';
import backgroundGameAsset from '../../assets/background.png';
import hudAsset from '../../assets/armadaHUD.png';
import { createCards, preloadCards } from './CardCreator';

import Player from './Player';
import baseSpriteSheet from '../../assets/playerBase.png';
import { preloadPlayerBase } from './PlayerBase';
import PlayerBase from './PlayerBase/Playerbase';
import MobP1Ex from '../../assets/mobPlayer1Ex.png';
import {preloadSpriteSheets} from './Animations'
// eslint-disable-next-line import/no-cycle, import/no-named-as-default
import Archer from './Units/Archer';
import Exterminator from './Units/Exterminator';
import Knight from './Units/Knight';
import Necro from './Units/Necro';
import Warrior from './Units/Warrior';

import arrowSounds from '../../assets/audio/Sound-effects/arrow.mp3';
import laserSounds from '../../assets/audio/Sound-effects/laser.mp3';
import magics from '../../assets/audio/Sound-effects/magic.mp3';
import lightsaberSounds from '../../assets/audio/Sound-effects/lightsaberGood.mp3';
import swordSounds from '../../assets/audio/Sound-effects/sword.mp3';


 // Create a health bar for objPlayerBase1
 let healthBarWidth1 = 296; // Adjust the width of the health bar
 let healthBarHeight = 6; // Adjust the height of the health bar
 // Create a health bar for objPlayerBase2
 let healthBarWidth2 = 296; // Adjust the width of the health bar
 
let player2CharactersGroup;
let player1CharactersGroup;

let objPlayerBase1;
let objPlayerBase2;

let baseHealthBarValue;

const minimumHpNeededToTurnHealthBarInRed = 400;
let colorGreen = 0x008000;
let colorRed = 0xFF0000;
let colorUsedP1 = null;
let colorUsedP2 = null;

let spawnPointsTeam1 = [
  { x: 120, y: 350 },
  { x: 140, y: 300 },
  { x: 160, y: 250 },
  { x: 140, y: 200 }
];

let spawnPointsTeam2 = [
  { x: 650, y: 250 },
  { x: 650, y: 350 },
  { x: 600, y: 200 },
  { x: 600, y: 300 }
];


function findClosestUnit(unit, unitGroup) {
  let closestUnit = null;
  let closestDistance = Infinity;

  unitGroup.children.iterate(function (otherUnit) {
    if (otherUnit.isDead) {
      return; // Skip dead units
    }

    const distance = Phaser.Math.Distance.Between(unit.x, unit.y, otherUnit.x, otherUnit.y);
    if (distance < closestDistance) {
      closestUnit = otherUnit;
      closestDistance = distance;
    }
  });

  return closestUnit;
}


class GameScene extends Phaser.Scene {
  constructor() {
    super('game-scene');
    this.soundOn = true;
    this.soundButton = undefined;
    this.player1 = undefined;
    this.player2 = undefined;
    this.player1 = new Player('player1');
    this.player2 = new Player('player2');
    this.base1 = undefined;
    this.base2 = undefined;
    this.cursors = undefined;
    this.player1CharactersGroup = undefined;
    this.player2CharactersGroup = undefined;
    this.cardsP1=[];
    this.indexP1=0;
    this.cardsP2=[];
    this.indexP2=0;
    this.graphics1 = null;
    this.graphics2 = null;
    
    
    // this.KnightSpawn = undefined;
  }
  
  
  // eslint-disable-next-line class-methods-use-this
  handleSceneShutdown() {
   
  }
  
  preload() {
    
    this.load.audio('arrowSound', arrowSounds);
    this.load.audio('laserSound', laserSounds);
    this.load.audio('magicSound', magics);
    this.load.audio('lightsaberSound', lightsaberSounds);
    this.load.audio('swordSound', swordSounds);


    this.load.image('backgroundGame', backgroundGameAsset);
    this.load.image('hud', hudAsset);
    this.load.image('soundOn', soundOnAsset);
    this.load.image('soundOff', soundOffAsset);
    this.load.audio('theme', music);
    
    // preloading SpriteSheets
    preloadSpriteSheets(this);
    // preloading cards assets
    preloadCards(this);

    preloadPlayerBase(this);
   
  }

  create() {
   
  // Draw a background rectangle for the health bar
  this.graphics1 = this.add.graphics();
  this.graphics1.fillStyle(0x008000, 1);
  this.graphics1.fillRect(14, 28, healthBarWidth1, healthBarHeight).setDepth(1);

  // Draw a background rectangle for the health bar
  this.graphics2 = this.add.graphics();
  this.graphics2.fillStyle(0x008000, 1);
  this.graphics2.fillRect(490, 28, healthBarWidth2, healthBarHeight).setDepth(1);

    player1CharactersGroup=this.add.group();
    player2CharactersGroup=this.add.group();
    
    objPlayerBase1 = new PlayerBase(this,50,250);
    objPlayerBase2 = new PlayerBase(this,750,250);

    // this updates the healthbar lenght in function of the const base hp of the "base"
    baseHealthBarValue = objPlayerBase1.health;

    player1CharactersGroup.add(objPlayerBase1);
    player2CharactersGroup.add(objPlayerBase2);

    let base1 = player1CharactersGroup.getChildren();
    base1.forEach(base => {
      base.spawn();
  });
    
    let base2 = player2CharactersGroup.getChildren();
    base2.forEach(base => {
      base.spawn();
    });
    this.debugShowBody = true;

    // fonction pour choisir cartes a gauche P1
    this.input.keyboard.on('keydown-Q', (event) => {
      // Réduisez l'échelle de la carte précédemment sélectionnée
    this.cardsP1[this.indexP1].setScale(0.38);
  
      // Mettez à jour l'index de la carte sélectionnée
    this.indexP1--;
      if (this.indexP1 < 0) {
        this.indexP1 = this.cardsP1.length - 1; // Boucle vers la fin si nous sommes au début
      }
        // Mettez en évidence la nouvelle carte sélectionnée
    this.cardsP1[this.indexP1].setScale(0.45);
  });




    
  // fonction pour choisir cartes a droite P1
  this.input.keyboard.on('keydown-D', (event) => {
    // Réduisez l'échelle de la carte précédemment sélectionnée
    this.cardsP1[this.indexP1].setScale(0.38);

    // Mettez à jour l'index de la carte sélectionnée
    this.indexP1++;
    if (this.indexP1 >= this.cardsP1.length) {
      this.indexP1 = 0; // Boucle vers le début si nous sommes à la fin
    }

    // Mettez en évidence la nouvelle carte sélectionnée
    this.cardsP1[this.indexP1].setScale(0.45);
});
  




function addWarriorP1(indexP1, scene) {
  let spawnPointTeam1 = Phaser.Utils.Array.GetRandom(spawnPointsTeam1);
  
  switch(indexP1) {
    case 0:
      player1CharactersGroup.add(new Archer(scene,spawnPointTeam1.x,spawnPointTeam1.y,'right'));
      break;
    case 1:
      player1CharactersGroup.add(new Exterminator(scene,spawnPointTeam1.x,spawnPointTeam1.y,'right'));
      break;
    case 2:
      player1CharactersGroup.add(new Knight(scene,spawnPointTeam1.x,spawnPointTeam1.y,'right'));
      break;
    case 3:
      player1CharactersGroup.add(new Necro(scene,spawnPointTeam1.x,spawnPointTeam1.y,'right'));
      break;
    case 4:
      player1CharactersGroup.add(new Warrior(scene,spawnPointTeam1.x,spawnPointTeam1.y,'right'));
      break;
    default:
      console.log(player1CharactersGroup);
  }
}


// Spawn warriors
const spawnWarriors1 = () => {
  player1CharactersGroup.getChildren().forEach(warrior => {
    if (!warrior.hasSpawned) {
      warrior.spawn();
      // eslint-disable-next-line no-param-reassign
      warrior.hasSpawned = true;
    }
  });
  this.physics.add.collider(player1CharactersGroup, player1CharactersGroup);
  this.physics.add.collider(player2CharactersGroup, player1CharactersGroup);
}


// fonction pour choisir cartes a gauche P2
this.input.keyboard.on('keydown-LEFT', (event) => {
  // Réduisez l'échelle de la carte précédemment sélectionnée pour le joueur 2
  this.cardsP2[this.indexP2].setScale(0.38);

  // Mettez à jour l'index de la carte sélectionnée pour le joueur 2
  this.indexP2--;
  if (this.indexP2 < 0) {
    this.indexP2 = this.cardsP2.length - 1; // Boucle vers la fin si nous sommes au début
  }

  // Mettez en évidence la nouvelle carte sélectionnée pour le joueur 2
  this.cardsP2[this.indexP2].setScale(0.45);
});
  
// fonction pour choisir cartes a droite P2
this.input.keyboard.on('keydown-RIGHT', (event) => {
  // Réduisez l'échelle de la carte précédemment sélectionnée pour le joueur 2
  this.cardsP2[this.indexP2].setScale(0.38);

  // Mettez à jour l'index de la carte sélectionnée pour le joueur 2
  this.indexP2++;
  if (this.indexP2 >= this.cardsP2.length) {
    this.indexP2 = 0; // Boucle vers le début si nous sommes à la fin
  }

  // Mettez en évidence la nouvelle carte sélectionnée pour le joueur 2
  this.cardsP2[this.indexP2].setScale(0.45);
});








function addWarriorP2(indexP2, scene) {
  let spawnPointTeam2 = Phaser.Utils.Array.GetRandom(spawnPointsTeam2);

  switch(indexP2) {
    case 0:
      player2CharactersGroup.add(new Archer(scene, spawnPointTeam2.x, spawnPointTeam2.y,'left', player2CharactersGroup.get));
      break;
    case 1:
      player2CharactersGroup.add(new Exterminator(scene, spawnPointTeam2.x, spawnPointTeam2.y,'left'));
      break;
    case 2:
      player2CharactersGroup.add(new Knight(scene, spawnPointTeam2.x, spawnPointTeam2.y,'left'));
      break;
    case 3:
      player2CharactersGroup.add(new Necro(scene, spawnPointTeam2.x, spawnPointTeam2.y,'left'));
      break;
    case 4:
      player2CharactersGroup.add(new Warrior(scene, spawnPointTeam2.x, spawnPointTeam2.y,'left'));
      break;
    default:
      console.log(player2CharactersGroup);
  }
}

/// Spawn warriors
const spawnWarriors2 = () => {
  player2CharactersGroup.getChildren().forEach(warrior => {
    if (!warrior.hasSpawned) {
      warrior.spawn();
      // eslint-disable-next-line no-param-reassign
      warrior.hasSpawned = true;
    }
  });
  this.physics.add.collider(player2CharactersGroup, player2CharactersGroup);
  this.physics.add.collider(player1CharactersGroup, player2CharactersGroup);
}

  // Adding card for the charachters
    createCards(this);
    this.cards=createCards(this);
    
    

    for(let i=0; i<5; i++) {
      this.cardsP1[i]=this.cards[i];
    }
    for(let j=0; j<5; j++) {
      this.cardsP2[j]=this.cards[j+5];
    }
 
    
 
    this.cardsP1[this.indexP1].setScale(0.45);
    this.cardsP2[this.indexP2].setScale(0.45);

    


  

    // eslint-disable-next-line no-console

    

    // Hud creation
    const hudGame = this.add
      .image(this.scale.width * 0.5, this.scale.height * 0.5, 'hud')
      .setOrigin(0.5)
      .setDepth(0.9);
    hudGame.setScale(this.scale.width / hudGame.width, this.scale.height / hudGame.height);

    // Add sound toggle button
    const musicT = this.sound.add('theme');
    musicT.setVolume(0.2);
    musicT.play({ loop: true });
    this.soundButton = this.add
      .image(this.sys.game.config.width - 30, 450, this.soundOn ? 'soundOn' : 'soundOff')
      .setDepth(1);
    this.soundButton.setInteractive();
    this.soundButton.on('pointerdown', this.toggleSound, this);
    this.soundButton.on('pointerover', () => {
      this.soundButton.setScale(1.2);
    });
    this.soundButton.on('pointerout', () => {
      this.soundButton.setScale(1);
    });

    // Dev button to go to the end scene (to be delted later in developement)
    const goToEndSceneButton = this.add
      .text(400, 450, 'Dev: go to end scene', { font: '24px Arial', fill: '#ffffff' })
      .setDepth(1);
    goToEndSceneButton.setInteractive();

    goToEndSceneButton.on('pointerover', () => {
      goToEndSceneButton.setFontSize(30);
      goToEndSceneButton.setColor('#ffff99');
      goToEndSceneButton.setX(400);
      goToEndSceneButton.setY(445);
    });
    goToEndSceneButton.on('pointerout', () => {
      goToEndSceneButton.setFontSize(24);
      goToEndSceneButton.setColor('#ffffff');
      goToEndSceneButton.setX(400);
      goToEndSceneButton.setY(450);
    });
    goToEndSceneButton.on('pointerdown', () => {
      this.sys.game.global = {winner: this.player1.playerName};
      this.sound.stopAll();
      this.scene.stop('game-scene');
      this.scene.switch('end-scene');
    });

    // Add pause button
    const pauseButton = this.add
      .text(10, 450, 'Pause', { font: '24px Arial', fill: '#ffffff' })
      .setDepth(1);
    pauseButton.setInteractive();

    pauseButton.on('pointerover', () => {
      pauseButton.setFontSize(30);
      pauseButton.setColor('#ffff99');
      pauseButton.setX(10);
      pauseButton.setY(445);
    });
    pauseButton.on('pointerout', () => {
      pauseButton.setFontSize(24);
      pauseButton.setColor('#ffffff');
      pauseButton.setX(10);
      pauseButton.setY(450);
    });
    pauseButton.on('pointerdown', () => {
      this.scene.launch('PauseScene');
      this.scene.pause();
      this.sound.pauseAll();
    });

    const box = this.add.graphics().setDepth(1);
    const boxWidth = 100;
    const boxHeight = 40;
    const cornerRadius = 10;

    box.fillStyle(0x000000, 1).setDepth(1); // Couleur noire
    box
      .fillRoundedRect(
        (this.sys.game.config.width - boxWidth) / 2,
        60,
        boxWidth,
        boxHeight,
        cornerRadius,
      )
      .setDepth(1);

    box.lineStyle(4, 0x808080, 1).setDepth(1); // Couleur de bordure grise
    box
      .strokeRoundedRect(
        (this.sys.game.config.width - boxWidth) / 2,
        60,
        boxWidth,
        boxHeight,
        cornerRadius,
      )
      .setDepth(1);

    const player1GoldsText = this.add
      .text(this.sys.game.config.width * 0.11, 95, '100', {
        fontSize: '18px',
        fill: '#ffffff',
      })
      .setOrigin(0.5)
      .setDepth(1);

    const player2GoldsText = this.add
      .text(this.sys.game.config.width * 0.89, 95, '100', {
        fontSize: '18px',
        fill: '#ffffff',
      })
      .setOrigin(0.5)
      .setDepth(1);

    const timerText = this.add
      .text(this.sys.game.config.width / 2, 80, '15', {
        fontSize: '24px',
        fill: '#ffffff',
      })
      .setOrigin(0.5)
      .setDepth(1);

    let timeLeft = 5;

    let incrementAmount = 100;

    const updateTimer = () => {
      timeLeft -= 1;
      timerText.setText(`${timeLeft}`);

      if (timeLeft === 0) {
        console.log(this.indexP1);
        console.log(this.indexP2);
        addWarriorP1(this.indexP1, this);
        
        spawnWarriors1();
        addWarriorP2(this.indexP2, this);
        
        spawnWarriors2();
        
       
        timeLeft = 5; // Réinitialiser le temps à 15 une fois qu'il atteint zéro
        this.player1.addGolds(incrementAmount);
        const currentGolds = this.player1.golds; // Met à jour le nombre actuel de golds
        player1GoldsText.setText(`${currentGolds}`);
        player2GoldsText.setText(`${currentGolds}`);
        incrementAmount *= 1.5; // Montant à incrémenter (peut être ajusté)
        
        
      }
    };

    const timerEvent = this.time.addEvent({
      delay: 1000, // Mise à jour toutes les secondes
      callback: updateTimer,
      callbackScope: this,
      loop: true,
    });

    // New Timer
    const newTimerText = this.add
    .text(this.sys.game.config.width / 2, 120, '15:00', {
      fontSize: '24px',
      fill: '#ffffff',
    })
    .setOrigin(0.5)
    .setDepth(1);

    let newTimeLeft = 900; // 15 minutes in seconds

    const updateNewTimer = () => {
    const minutes = Math.floor(newTimeLeft / 60);
    const seconds = newTimeLeft % 60;

    // Format the timer text to display minutes and seconds
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    newTimerText.setText(formattedTime);

    newTimeLeft -= 1;

    if (newTimeLeft === 0) {
      // Redirect to EndScene
      this.scene.start('end-scene')
    }
    };

    const newTimerEvent = this.time.addEvent({
    delay: 1000, // Update every second
    callback: updateNewTimer,
    callbackScope: this,
    loop: true,
    });

    this.player1Stats = {
      health: 10000,
      golds: Player.DEFAULT_GOLDS,
      maxUnits: Player.DEFAULT_MAX_UNITS,
    };

    this.player2Stats = {
      health: 10000,
      golds: Player.DEFAULT_GOLDS,
      maxUnits: Player.DEFAULT_MAX_UNITS,
    };
    

  }
// Helper function to find the closest unit from a group to a given unit

// to delete
// let healthBarWidth1 = 296; // Adjust the width of the health bar
// let healthBarWidth2 = 296; // Adjust the width of the health bar

update() {
  // logic to find out the winner
    healthBarWidth1 = 296 * (objPlayerBase1.health / baseHealthBarValue);
    if(objPlayerBase1.health <= 0) {
      this.sys.game.global = {winner: this.player2.playerName};
      this.sound.stopAll();
      this.scene.stop('game-scene');
      this.scene.switch('end-scene');
    }
    
    healthBarWidth2 = 296 * (objPlayerBase2.health / baseHealthBarValue);
    if(objPlayerBase2.health <= 0) {
      this.sys.game.global = {winner: this.player1.playerName};
      this.sound.stopAll();
      this.scene.stop('game-scene');
      this.scene.switch('end-scene');
    }

    /* eslint-disable no-undef */
    // Update the graphics for health bars
    if(objPlayerBase1.health <= minimumHpNeededToTurnHealthBarInRed) {
      colorUsedP1 = colorRed
    } else {
      colorUsedP1 = colorGreen;
    }

    if(objPlayerBase2.health <= minimumHpNeededToTurnHealthBarInRed) {
      colorUsedP2 = colorRed
    } else {
      colorUsedP2 = colorGreen;
    }
    this.graphics1.clear(); // Clear the previous graphics to redraw
    this.graphics1.fillStyle(colorUsedP1, 1);
    this.graphics1.fillRect(14, 28, healthBarWidth1, healthBarHeight).setDepth(1);
    
    this.graphics2.clear();
    this.graphics2.fillStyle(colorUsedP2, 1);
    this.graphics2.fillRect(490, 28, healthBarWidth2, healthBarHeight).setDepth(1);
    
  // Mettre à jour la position et le comportement de chaque unité de l'équipe 1
  player1CharactersGroup.children.iterate(function  (unit1) {
    if (unit1.health <= 0) {
      unit1.die();
      return; // Ignorer les mises à jour pour les unités mortes
    }

    let closestUnit2 = findClosestUnit(unit1, player2CharactersGroup);

    if (closestUnit2) {
      if (Phaser.Math.Distance.Between(unit1.x, unit1.y, closestUnit2.x, closestUnit2.y) < unit1.range) {
        // Arrêter le mouvement et attaquer l'unité la plus proche de l'équipe 2
        unit1.attackTarget(closestUnit2);
      } else {
        // Se déplacer vers l'unité la plus proche de l'équipe 2
        this.physics.moveToObject(unit1, closestUnit2, unit1.speed);
      }
    } else {
      console.log('Pas de cible valide pour l\'équipe 1');
    }
  }, this);

  // Mettre à jour la position et le comportement de chaque unité de l'équipe 2
  player2CharactersGroup.children.iterate(function (unit2) {
    if (unit2.health <= 0) {
      unit2.die();
      return; // Ignorer les mises à jour pour les unités mortes
    }

    let closestUnit1 = findClosestUnit(unit2, player1CharactersGroup);

    if (closestUnit1) {
      if (Phaser.Math.Distance.Between(unit2.x, unit2.y, closestUnit1.x, closestUnit1.y) < unit2.range) {
        // Arrêter le mouvement et attaquer l'unité la plus proche de l'équipe 1
        unit2.attackTarget(closestUnit1);
      } else {
        // Se déplacer vers l'unité la plus proche de l'équipe 1
        this.physics.moveToObject(unit2, closestUnit1, unit2.speed);
      }
    } else {
      console.log('Pas de cible valide pour l\'équipe 2');
    }
  }, this);
}

  
   // HERE END OF UPDATE

   die() {  
      this.setVisible(false).setActive(false);
      console.log('an unit died');
      this.destroy();    
   }

  toggleSound() {
    this.soundOn = !this.soundOn;
    if (this.soundOn) {
      // Logic to turn sound on
      this.soundButton.setTexture('soundOn');
      this.sound.play('theme');
    } else {
      // Logic to turn sound off
      this.soundButton.setTexture('soundOff');
      this.sound.stopAll();
    }
  }
}

export default GameScene;
