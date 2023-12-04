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


function handleOverlap(unit1, unit2) {
  // Si les unités se déplacent dans la même direction
  if (unit1.body.velocity.x === unit2.body.velocity.x) {
      // Si l'unité1 est devant l'unité2 et se déplace vers la droite (équipe 1)
      if (unit1.x > unit2.x && unit1.body.velocity.x > 0) {
          unit1.setVelocityX(0);
      }
      // Si l'unité1 est derrière l'unité2 et se déplace vers la gauche (équipe 2)
      else if (unit1.x < unit2.x && unit1.body.velocity.x < 0) {
          unit1.setVelocityX(0);
      }
  }
}

// Variables here
let cursors;


let player2CharactersGroup;
let player1CharactersGroup;

let lastSpawnedIndex1 = 1;
let lastSpawnedIndex2 = 1;

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
    
    
    // this.KnightSpawn = undefined;
  }

  // eslint-disable-next-line class-methods-use-this
  handleSceneShutdown() {
   
  }
  
  preload() {
    // TEST FOR EXEMPLE DONT DELETE THIS
    this.load.image('KNIGHT_KEY', MobP1Ex)
    // thx
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
   
    player1CharactersGroup=this.add.group();
    player2CharactersGroup=this.add.group();
    
    
    player1CharactersGroup.add(new PlayerBase(this,50, 250));
    player2CharactersGroup.add(new PlayerBase(this,750, 250));

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
      console.log(spawnPointTeam1.x,spawnPointTeam1.y)
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
  for(let i = lastSpawnedIndex1; i < player1CharactersGroup.getChildren().length; i++) {
      let warrior = player1CharactersGroup.getChildren()[i];
      warrior.spawn();
  }
  lastSpawnedIndex1 = player1CharactersGroup.getChildren().length;
  this.physics.add.collider(player1CharactersGroup, player1CharactersGroup,handleOverlap, null, this);

  // Ajoutez la détection de collision ici
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
      player2CharactersGroup.add(new Archer(scene, spawnPointTeam2.x, spawnPointTeam2.y,'left'));
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

// Spawn warriors
const spawnWarriors2 = () => {
  for(let i = lastSpawnedIndex2; i < player2CharactersGroup.getChildren().length; i++) {
      let warrior = player2CharactersGroup.getChildren()[i];
      warrior.spawn();
  }
  lastSpawnedIndex2 = player2CharactersGroup.getChildren().length;
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

    

    // Define keybinds
 cursors = this.input.keyboard.createCursorKeys();
  


  







 
    
    
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

  // eslint-disable-next-line class-methods-use-this
  update() {

    // logic to find out the winner
    if(this.player1.health <= 0) {
      this.sys.game.global = {winner: this.player2.playerName};
      this.sound.stopAll();
      this.scene.stop('game-scene');
      this.scene.switch('end-scene');
    }
    if(this.player2.health <= 0) {
      this.sys.game.global = {winner: this.player1.playerName};
      this.sound.stopAll();
      this.scene.stop('game-scene');
      this.scene.switch('end-scene');
    }


    let closestUnit2 = this.base2;
    
    let closestDistance2 = Infinity;
    // Mettez à jour la position de chaque unité de l'équipe 1
    player1CharactersGroup.children.iterate(function(unit1) {

    
      // Trouver l'unité de l'équipe 2 la plus proche
      player2CharactersGroup.children.iterate(function(unit2) {
        let distance = Phaser.Math.Distance.Between(unit1.x, unit1.y, unit2.x, unit2.y);
        if (distance < closestDistance2) {
          closestUnit2 = unit2;
          closestDistance2 = distance;
          console.log(typeof closestUnit2);
        }
      });
    
      // Déplacer l'unité de l'équipe 1 vers l'unité de l'équipe 2 la plus proche
      if (closestUnit2 && closestUnit2.active) {
        // Vérifier si la distance est inférieure au range de l'unité
        if (closestDistance2 <= unit1.range) {
          // Arrêter le mouvement de l'unité
          unit1.setVelocity(0, 0);
          unit1.attackTarget(closestUnit2);
          console.log('unit 2 est tapé');
          closestUnit2.takeDamage(unit1.damage);
          if(closestUnit2.health===0 || closestUnit2.health<0 ){
            closestUnit2.setVisible(false).setActive(false);
            closestUnit2.destroy();   
            console.log("unit 1 est mort");
            closestUnit2=null;
          } 
          // Vérifier s'il y a un timer d'attaque et s'il est prêt
          if (unit1.attackTimer) {
            console.log("le minuteur marche");
            // Réinitialiser le timer d'attaque
            unit1.attackTimer.reset();
          }
        
        }else{
          // Continuer le mouvement de l'unité
          this.physics.moveToObject(unit1, closestUnit2, unit1.speed);
          // Changer l'animation de l'unité pour le mouvement
        }
        
      } else {
        console.log('No valid target for attack');
      }
    }, this);
    
   if (closestUnit2===null){
    closestUnit2=this.base2;
  }

    let closestUnit1 = this.base1;
    let closestDistance1 = Infinity;
    // Faire la même chose pour l'équipe 2
    player2CharactersGroup.children.iterate(function(unit2) {

    
      // Trouver l'unité de l'équipe 1 la plus proche
      player1CharactersGroup.children.iterate(function(unit1) {
        let distance = Phaser.Math.Distance.Between(unit2.x, unit2.y, unit1.x, unit1.y);
        if (distance < closestDistance1) {
          closestUnit1 = unit1;
          closestDistance1 = distance;
        }
      });
    
      // Déplacer l'unité de l'équipe 2 vers l'unité de l'équipe 1 la plus proche
      if (closestUnit1 && closestUnit1.active) {
        // Vérifier si la distance est inférieure au range de l'unité
        if (closestDistance1 < unit2.range) {
          console.log("check de la range");
          // Arrêter le mouvement de l'unité
          unit2.setVelocity(0, 0);
          // Changer l'animation de l'unité pour l'attaque
         
          // Vérifier s'il y a un timer d'attaque et s'il est prêt
          if (unit2.attackTimer) { // && unit2.attackTimer.getElapsedSeconds() >= 2
            // Infliger des dégâts à la cible
            unit2.attackTarget(closestUnit1);
            console.log("unit2 tape unit1");
            if(closestUnit1.health===0 || closestUnit1.health<0 ){ // DIE
            closestUnit1.setVisible(false).setActive(false);
            closestUnit1.destroy();   
            console.log("unit 1 est mort");
            closestUnit1=null;
            } 
            // Réinitialiser le timer d'attaque
            unit2.attackTimer.reset();
          }
        
        }else{
          // Continuer le mouvement de l'unité
          this.physics.moveToObject(unit2, closestUnit1, unit2.speed);
          // Changer l'animation de l'unité pour le mouvement
        
        }
      }
    }, this);
   if (closestUnit1===null){
    closestUnit1=this.base1;}
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
