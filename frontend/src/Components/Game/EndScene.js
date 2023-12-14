/* eslint-disable no-unused-vars */
import Phaser from 'phaser';
import backgroundAssetEnd from '../../assets/end_background.png';
import musicAsset from '../../assets/audio/theme_musics/Casey_Tells_the_Truth.mp3';
import { getAuthenticatedUser1, getAuthenticatedUser2, isAuthenticated1, isAuthenticated2 } from '../../utils/auths';

export default class EndScene extends Phaser.Scene {
  constructor() {
    super('end-scene');
  }

  preload() {
    this.load.image('backgroundEnd', backgroundAssetEnd);
    this.load.audio('musicEndScene', musicAsset);
  }

  create() {
    // end screen music
    const themeSong = this.sound.add('musicEndScene');
    themeSong.setVolume(0.5);
    themeSong.play();

    // Add the background image and set darker tint
    const backgroundEnd = this.add
      .image(this.scale.width * 0.5, this.scale.height * 0.5, 'backgroundEnd')
      .setOrigin(0.5)
      .setDepth(-1);
    backgroundEnd.setScale(
      this.scale.width / backgroundEnd.width,
      this.scale.height / backgroundEnd.height,
    );
    backgroundEnd.setTint(0x999999);
    
    // Adding or removing ranking_points
    if(isAuthenticated1() && isAuthenticated2()){
      if(this.sys.game.global.winner === 'player1'){
        console.log('player 1 win')
        addRanking(getAuthenticatedUser1())
        console.log('player 2 lose')
        removeRanking(getAuthenticatedUser2())
      }
      else{
        console.log('player 1 lose')
        removeRanking(getAuthenticatedUser1())
        console.log('player 2 win')
        addRanking(getAuthenticatedUser2())
      };
    } else if (isAuthenticated1()) {
      if(this.sys.game.global.winner === 'player1'){
        console.log('player 1 win')
        addRanking(getAuthenticatedUser1())
      }
      else{
        console.log('player 1 lose')
        removeRanking(getAuthenticatedUser1())
      };
    } else if (isAuthenticated2()){
      if(this.sys.game.global.winner === 'player2'){
        console.log('player 2 win')
        addRanking(getAuthenticatedUser2())
      }
      else{
        console.log('player 2 lose')
        removeRanking(getAuthenticatedUser2())
      };
    }


    // showing winner
    const winnerName = this.add
      .text(
        this.scale.width * 0.5,
        this.scale.height * 0.3,
        `The winner is ${this.sys.game.global.winner}!`,
        {
          fontFamily: 'Blackletter, serif',
          fontSize: '32px',
          color: '#ffffff',
          fontStyle: 'bold',
        },
      )
      .setOrigin(0.5);

    // Restart button implementation
    const restartButton = this.add
      .text(this.scale.width * 0.5, this.scale.height * 0.5, 'Play again?', {
        fontFamily: 'Blackletter, serif',
        fontSize: '32px',
        color: '#ffffff',
        fontStyle: 'bold',
      })
      .setOrigin(0.5);
    restartButton.setInteractive();
    restartButton.on('pointerover', () => {
      restartButton.setFontSize(40);
      restartButton.setColor('#ffff99');
    });
    restartButton.on('pointerout', () => {
      restartButton.setFontSize(32);
      restartButton.setColor('#ffffff');
    });
    restartButton.on('pointerdown', () => {
      this.sound.stopAll();
      this.scene.start('game-scene');
    });

    // Main menu button implementation
    const mainMenuButton = this.add
      .text(this.scale.width * 0.5, this.scale.height * 0.6, 'Go to main menu!', {
        fontFamily: 'Blackletter, serif',
        fontSize: '32px',
        color: '#ffffff',
        fontStyle: 'bold',
      })
      .setOrigin(0.5);
    mainMenuButton.setInteractive();
    mainMenuButton.on('pointerover', () => {
      mainMenuButton.setFontSize(40);
      mainMenuButton.setColor('#ffff99');
    });
    mainMenuButton.on('pointerout', () => {
      mainMenuButton.setFontSize(32);
      mainMenuButton.setColor('#ffffff');
    });
    mainMenuButton.on('pointerdown', () => {
      this.sound.stopAll();
      this.scene.start('start-scene');
    });
  }
}

async function addRanking(username) {
  try {
  const response = await fetch (`${process.env.API_BASE_URL}/ranking/addRanking`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(username)
  });

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  const updatedRankingUser = await response.json();

  console.log('Updated user: ', updatedRankingUser);
  }
  catch (err) {
    console.error('addRanking::error: ', err);
  }
}

async function removeRanking(username) {

  try {
  const response = await fetch (`${process.env.API_BASE_URL}/ranking/removeRanking`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(username)
  });

  if (!response.ok) throw new Error(`fetch error : ${response.status} : ${response.statusText}`);
  const updatedRankingUser = await response.json();

  console.log('Updated user: ', updatedRankingUser);
  }
  catch (err) {
    console.error('removeRanking::error: ', err);
  }
}
