// Import the card image assets
import archerCardAsset from '../../assets/archerCard.png';
import botCardAsset from '../../assets/botCard.png';
import knightCardAsset from '../../assets/knightCard.png';
import necromancerCardAsset from '../../assets/necromancerCard.png';
import warriorCardAsset from '../../assets/warriorCard.png';

// Import the card image popup
import archerCardPopup from '../../assets/archerPopUp.png';
import botCardPopup from '../../assets/botPopUp.png';
import knightCardPopup from '../../assets/knightPopUp.png';
import necromancerCardPopup from '../../assets/necromancerPopUp.png';
import warriorCardPopup from '../../assets/warriorPopUp.png';

import Archer from './Units/Archer';
import Exterminator from './Units/Exterminator';
import Knight from './Units/Knight';
import Necro from './Units/Necro';
import Warrior from './Units/Warrior';

const archerStats = Archer.getStats();
const exterminatorStats = Exterminator.getStats();
const knightStats = Knight.getStats();
const necroStats = Necro.getStats();
const warriorStats = Warrior.getStats();



// Load the card images
export function preloadCards(scene) {
  scene.load.image('archerCard', archerCardAsset);
  scene.load.image('botCard', botCardAsset);
  scene.load.image('knightCard', knightCardAsset);
  scene.load.image('necromancerCard', necromancerCardAsset);
  scene.load.image('warriorCard', warriorCardAsset);

  scene.load.image('archerCardPopUp', archerCardPopup);
  scene.load.image('botCardPopUp', botCardPopup);
  scene.load.image('knightCardPopUp', knightCardPopup);
  scene.load.image('necromancerCardPopUp', necromancerCardPopup);
  scene.load.image('warriorCardPopUp', warriorCardPopup);
}

// CardCreator.js
const yValue = 0.907;

export function createCards(scene) {

  const hoverArcherImageP2 = scene.add
  .text(scene.scale.width * 0.5, scene.scale.height * 0.7, '', {
  font: "16px 'Times New Roman', Times, serif",
  fill: "#ffffff",
  backgroundColor: "#000000",
  padding: { x: 10, y: 5 },
  lineSpacing: 5,
})
.setOrigin(0.5, 0.5)
.setDepth(2)
.setFixedSize(200, 115)
.setWordWrapWidth(200) 
.setAlign('center')
.setAlpha(0.8)
.setVisible(false); // Initially set to invisible

hoverArcherImageP2.setText(`Health: ${archerStats.health} hp
Range: ${archerStats.range} units
Damage: ${archerStats.damage} ad
Movement speed: ${archerStats.speed} ms
Price: ${archerStats.price} gold`);

const hoverWarriorImageP2 = scene.add
  .text(scene.scale.width * 0.5, scene.scale.height * 0.7, '', {
  font: "16px 'Times New Roman', Times, serif",
  fill: "#ffffff",
  backgroundColor: "#000000",
  padding: { x: 10, y: 5 },
  lineSpacing: 5,
})
.setOrigin(0.5, 0.5)
.setDepth(2)
.setFixedSize(200, 115)
.setWordWrapWidth(200) 
.setAlign('center')
.setAlpha(0.8)
.setVisible(false); // Initially set to invisible

hoverWarriorImageP2.setText(`Health: ${warriorStats.health} hp
Range: ${warriorStats.range} units
Damage: ${warriorStats.damage} ad
Movement speed: ${warriorStats.speed} ms
Price: ${warriorStats.price} gold`);

const hoverBotImageP2 = scene.add
    .text(scene.scale.width * 0.5, scene.scale.height * 0.7, '', {
    font: "16px 'Times New Roman', Times, serif",
    fill: "#ffffff",
    backgroundColor: "#000000",
    padding: { x: 10, y: 5 },
    lineSpacing: 5,
})
.setOrigin(0.5, 0.5)
.setDepth(2)
.setFixedSize(200, 115)
.setWordWrapWidth(200) 
.setAlign('center')
.setAlpha(0.8)
.setVisible(false); // Initially set to invisible

hoverBotImageP2.setText(`Health: ${exterminatorStats.health} hp
Range: ${exterminatorStats.range} units
Damage: ${exterminatorStats.damage} ad
Movement speed: ${exterminatorStats.speed} ms
Price: ${exterminatorStats.price} gold`);

const hoverNecromancerImageP2 = scene.add
  .text(scene.scale.width * 0.5, scene.scale.height * 0.7, '', {
  font: "16px 'Times New Roman', Times, serif",
  fill: "#ffffff",
  backgroundColor: "#000000",
  padding: { x: 10, y: 5 },
  lineSpacing: 5,
})
.setOrigin(0.5, 0.5)
.setDepth(2)
.setFixedSize(200, 115)
.setWordWrapWidth(200) 
.setAlign('center')
.setAlpha(0.8)
.setVisible(false); // Initially set to invisible

hoverNecromancerImageP2.setText(`Health: ${necroStats.health} hp
Range: ${necroStats.range} units
Damage: ${necroStats.damage} ad
Movement speed: ${necroStats.speed} ms
Price: ${necroStats.price} gold`);

const hoverKnightImageP2 = scene.add
    .text(scene.scale.width * 0.5, scene.scale.height * 0.7, '', {
    font: "16px 'Times New Roman', Times, serif",
    fill: "#ffffff",
    backgroundColor: "#000000",
    padding: { x: 10, y: 5 },
    lineSpacing: 5,
})
.setOrigin(0.5, 0.5)
.setDepth(2)
.setFixedSize(200, 115)
.setWordWrapWidth(200) 
.setAlign('center')
.setAlpha(0.8)
.setVisible(false); // Initially set to invisible

hoverKnightImageP2.setText(`Health: ${knightStats.health} hp
Range: ${knightStats.range} units
Damage: ${knightStats.damage} ad
Movement speed: ${knightStats.speed} ms
Price: ${knightStats.price} gold`);



  

  const hoverArcherImageP1 = scene.add
    .text(scene.scale.width * 0.5, scene.scale.height * 0.7, '', {
    font: "16px 'Times New Roman', Times, serif",
    fill: "#ffffff",
    backgroundColor: "#000000",
    padding: { x: 10, y: 5 },
    lineSpacing: 5,
})
.setOrigin(0.5, 0.5)
.setDepth(2)
.setFixedSize(200, 115)
.setWordWrapWidth(200) 
.setAlign('center')
.setAlpha(0.8)
.setVisible(false); // Initially set to invisible

hoverArcherImageP1.setText(`Health: ${archerStats.health} hp
Range: ${archerStats.range} units
Damage: ${archerStats.damage} ad
Movement speed: ${archerStats.speed} ms
Price: ${archerStats.price} gold`);

  // Adding card for the charachters
  const archerCardP1 = scene.add
    .image(scene.scale.width * 0.05, scene.scale.height * yValue, 'archerCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  archerCardP1.setInteractive();
  archerCardP1.on('pointerover', () => {
    hoverArcherImageP1.setVisible(true);
  });
  archerCardP1.on('pointerout', () => {
    hoverArcherImageP1.setVisible(false);
  });

  const hoverBotImageP1 = scene.add
    .text(scene.scale.width * 0.5, scene.scale.height * 0.7, '', {
    font: "16px 'Times New Roman', Times, serif",
    fill: "#ffffff",
    backgroundColor: "#000000",
    padding: { x: 10, y: 5 },
    lineSpacing: 5,
})
.setOrigin(0.5, 0.5)
.setDepth(2)
.setFixedSize(200, 115)
.setWordWrapWidth(200) 
.setAlign('center')
.setAlpha(0.8)
.setVisible(false); // Initially set to invisible

hoverBotImageP1.setText(`Health: ${exterminatorStats.health} hp
Range: ${exterminatorStats.range} units
Damage: ${exterminatorStats.damage} ad
Movement speed: ${exterminatorStats.speed} ms
Price: ${exterminatorStats.price} gold`);

  const botCardP1 = scene.add
    .image(scene.scale.width * 0.13, scene.scale.height * yValue, 'botCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  botCardP1.setInteractive();
  botCardP1.on('pointerover', () => {
    hoverBotImageP1.setVisible(true);
  });
  botCardP1.on('pointerout', () => {
    hoverBotImageP1.setVisible(false);
  });

  const hoverKnightImageP1 = scene.add
    .text(scene.scale.width * 0.5, scene.scale.height * 0.7, '', {
    font: "16px 'Times New Roman', Times, serif",
    fill: "#ffffff",
    backgroundColor: "#000000",
    padding: { x: 10, y: 5 },
    lineSpacing: 5,
})
.setOrigin(0.5, 0.5)
.setDepth(2)
.setFixedSize(200, 115)
.setWordWrapWidth(200) 
.setAlign('center')
.setAlpha(0.8)
.setVisible(false); // Initially set to invisible

hoverKnightImageP1.setText(`Health: ${knightStats.health} hp
Range: ${knightStats.range} units
Damage: ${knightStats.damage} ad
Movement speed: ${knightStats.speed} ms
Price: ${knightStats.price} gold`);

  const knightCardP1 = scene.add
    .image(scene.scale.width * 0.21, scene.scale.height * yValue, 'knightCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  knightCardP1.setInteractive();
  knightCardP1.on('pointerover', () => {
    hoverKnightImageP1.setVisible(true);
  });
  knightCardP1.on('pointerout', () => {
    hoverKnightImageP1.setVisible(false);
  });

  const hoverNecromancerImageP1 = scene.add
  .text(scene.scale.width * 0.5, scene.scale.height * 0.7, '', {
  font: "16px 'Times New Roman', Times, serif",
  fill: "#ffffff",
  backgroundColor: "#000000",
  padding: { x: 10, y: 5 },
  lineSpacing: 5,
})
.setOrigin(0.5, 0.5)
.setDepth(2)
.setFixedSize(200, 115)
.setWordWrapWidth(200) 
.setAlign('center')
.setAlpha(0.8)
.setVisible(false); // Initially set to invisible

hoverNecromancerImageP1.setText(`Health: ${necroStats.health} hp
Range: ${necroStats.range} units
Damage: ${necroStats.damage} ad
Movement speed: ${necroStats.speed} ms
Price: ${necroStats.price} gold`);

  const necromancerCardP1 = scene.add
    .image(scene.scale.width * 0.29, scene.scale.height * yValue, 'necromancerCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  necromancerCardP1.setInteractive();
  necromancerCardP1.on('pointerover', () => {
    hoverNecromancerImageP1.setVisible(true);
  });
  necromancerCardP1.on('pointerout', () => {
    hoverNecromancerImageP1.setVisible(false);
  });

  const hoverWarriorImageP1 = scene.add
  .text(scene.scale.width * 0.5, scene.scale.height * 0.7, '', {
  font: "16px 'Times New Roman', Times, serif",
  fill: "#ffffff",
  backgroundColor: "#000000",
  padding: { x: 10, y: 5 },
  lineSpacing: 5,
})
.setOrigin(0.5, 0.5)
.setDepth(2)
.setFixedSize(200, 115)
.setWordWrapWidth(200) 
.setAlign('center')
.setAlpha(0.8)
.setVisible(false); // Initially set to invisible

hoverWarriorImageP1.setText(`Health: ${warriorStats.health} hp
Range: ${warriorStats.range} units
Damage: ${warriorStats.damage} ad
Movement speed: ${warriorStats.speed} ms
Price: ${warriorStats.price} gold`);

  const warriorCardP1 = scene.add
    .image(scene.scale.width * 0.37, scene.scale.height * yValue, 'warriorCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  warriorCardP1.setInteractive();
  warriorCardP1.on('pointerover', () => {
    hoverWarriorImageP1.setVisible(true);
  });
  warriorCardP1.on('pointerout', () => {
    hoverWarriorImageP1.setVisible(false);
  });


  const warriorCardP2 = scene.add
    .image(scene.scale.width * 0.95, scene.scale.height * yValue, 'warriorCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  warriorCardP2.setInteractive();
  warriorCardP2.on('pointerover', () => {
    hoverWarriorImageP2.setVisible(true);
  });
  warriorCardP2.on('pointerout', () => {
    hoverWarriorImageP2.setVisible(false);
  });



  const necromancerCardP2 = scene.add
    .image(scene.scale.width * 0.87, scene.scale.height * yValue, 'necromancerCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  necromancerCardP2.setInteractive();
  necromancerCardP2.on('pointerover', () => {
    hoverNecromancerImageP2.setVisible(true);
  });
  necromancerCardP2.on('pointerout', () => {
    hoverNecromancerImageP2.setVisible(false);
  });


  const knightCardP2 = scene.add
    .image(scene.scale.width * 0.79, scene.scale.height * yValue, 'knightCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  knightCardP2.setInteractive();
  knightCardP2.on('pointerover', () => {
    hoverKnightImageP2.setVisible(true);
  });
  knightCardP2.on('pointerout', () => {
    hoverKnightImageP2.setVisible(false);
  });

  

  const botCardP2 = scene.add
    .image(scene.scale.width * 0.71, scene.scale.height * yValue, 'botCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  botCardP2.setInteractive();
  botCardP2.on('pointerover', () => {
    hoverBotImageP2.setVisible(true);
  });
  botCardP2.on('pointerout', () => {
    hoverBotImageP2.setVisible(false);
  });

  

  const archerCardP2 = scene.add
    .image(scene.scale.width * 0.63, scene.scale.height * yValue, 'archerCard')
    .setOrigin(0.5, 0.5)
    .setDepth(1)
    .setScale(0.38);
  archerCardP2.setInteractive();
  archerCardP2.on('pointerover', () => {
    hoverArcherImageP2.setVisible(true);
  });
  archerCardP2.on('pointerout', () => {
    hoverArcherImageP2.setVisible(false);
  });

  return [archerCardP1, botCardP1, knightCardP1, necromancerCardP1, warriorCardP1, archerCardP2, botCardP2, knightCardP2, necromancerCardP2, warriorCardP2];
}
