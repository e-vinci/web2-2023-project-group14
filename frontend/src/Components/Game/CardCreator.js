// Import the card image assets
import archerCardAsset from '../../assets/archerCard.png';
import botCardAsset from '../../assets/botCard.png';
import knightCardAsset from '../../assets/knightCard.png';
import necromancerCardAsset from '../../assets/necromancerCard.png';
import warriorCardAsset from '../../assets/warriorCard.png';

// Load the card images
export function preloadCards(scene) {
  scene.load.image('archerCard', archerCardAsset);
  scene.load.image('botCard', botCardAsset);
  scene.load.image('knightCard', knightCardAsset);
  scene.load.image('necromancerCard', necromancerCardAsset);
  scene.load.image('warriorCard', warriorCardAsset);
}

// CardCreator.js
const yValue = 0.907;

export function createCards(scene) {
  // Adding card for the charachters
  const archerCardP1 = scene.add
    .image(scene.scale.width * 0.05, scene.scale.height * yValue, 'archerCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  archerCardP1.setInteractive();
  archerCardP1.on('pointerover', () => {
    archerCardP1.setScale(0.45);
  });
  archerCardP1.on('pointerout', () => {
    archerCardP1.setScale(0.38);
  });

  const botCardP1 = scene.add
    .image(scene.scale.width * 0.13, scene.scale.height * yValue, 'botCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  botCardP1.setInteractive();
  botCardP1.on('pointerover', () => {
    botCardP1.setScale(0.45);
  });
  botCardP1.on('pointerout', () => {
    botCardP1.setScale(0.38);
  });

  const knightCardP1 = scene.add
    .image(scene.scale.width * 0.21, scene.scale.height * yValue, 'knightCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  knightCardP1.setInteractive();
  knightCardP1.on('pointerover', () => {
    knightCardP1.setScale(0.45);
  });
  knightCardP1.on('pointerout', () => {
    knightCardP1.setScale(0.38);
  });

  const necromancerCardP1 = scene.add
    .image(scene.scale.width * 0.29, scene.scale.height * yValue, 'necromancerCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  necromancerCardP1.setInteractive();
  necromancerCardP1.on('pointerover', () => {
    necromancerCardP1.setScale(0.45);
  });
  necromancerCardP1.on('pointerout', () => {
    necromancerCardP1.setScale(0.38);
  });

  const warriorCardP1 = scene.add
    .image(scene.scale.width * 0.37, scene.scale.height * yValue, 'warriorCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  warriorCardP1.setInteractive();
  warriorCardP1.on('pointerover', () => {
    warriorCardP1.setScale(0.45);
  });
  warriorCardP1.on('pointerout', () => {
    warriorCardP1.setScale(0.38);
  });

  const warriorCardP2 = scene.add
    .image(scene.scale.width * 0.95, scene.scale.height * yValue, 'warriorCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  warriorCardP2.setInteractive();
  warriorCardP2.on('pointerover', () => {
    warriorCardP2.setScale(0.45);
  });
  warriorCardP2.on('pointerout', () => {
    warriorCardP2.setScale(0.38);
  });

  const necromancerCardP2 = scene.add
    .image(scene.scale.width * 0.87, scene.scale.height * yValue, 'necromancerCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  necromancerCardP2.setInteractive();
  necromancerCardP2.on('pointerover', () => {
    necromancerCardP2.setScale(0.45);
  });
  necromancerCardP2.on('pointerout', () => {
    necromancerCardP2.setScale(0.38);
  });

  const knightCardP2 = scene.add
    .image(scene.scale.width * 0.79, scene.scale.height * yValue, 'knightCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  knightCardP2.setInteractive();
  knightCardP2.on('pointerover', () => {
    knightCardP2.setScale(0.45);
  });
  knightCardP2.on('pointerout', () => {
    knightCardP2.setScale(0.38);
  });

  const botCardP2 = scene.add
    .image(scene.scale.width * 0.71, scene.scale.height * yValue, 'botCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  botCardP2.setInteractive();
  botCardP2.on('pointerover', () => {
    botCardP2.setScale(0.45);
  });
  botCardP2.on('pointerout', () => {
    botCardP2.setScale(0.38);
  });

  const archerCardP2 = scene.add
    .image(scene.scale.width * 0.63, scene.scale.height * yValue, 'archerCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  archerCardP2.setInteractive();
  archerCardP2.on('pointerover', () => {
    archerCardP2.setScale(0.45);
  });
  archerCardP2.on('pointerout', () => {
    archerCardP2.setScale(0.38);
  });
}