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
  const hoverArcherImageP1 = scene.add
    .image(scene.scale.width * 0.5, scene.scale.height * 0.7, 'archerCardPopUp')
    .setOrigin(0.5, 0.5)
    .setDepth(2)
    .setScale(0.7)
    .setVisible(false); // Initially set to invisible

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
    .image(scene.scale.width * 0.5, scene.scale.height * 0.7, 'botCardPopUp')
    .setOrigin(0.5, 0.5)
    .setDepth(2)
    .setScale(0.7)
    .setVisible(false); // Initially set to invisible

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
    .image(scene.scale.width * 0.5, scene.scale.height * 0.7, 'knightCardPopUp')
    .setOrigin(0.5, 0.5)
    .setDepth(2)
    .setScale(0.7)
    .setVisible(false); // Initially set to invisible

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
    .image(scene.scale.width * 0.5, scene.scale.height * 0.7, 'necromancerCardPopUp')
    .setOrigin(0.5, 0.5)
    .setDepth(2)
    .setScale(0.7)
    .setVisible(false); // Initially set to invisible

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
    .image(scene.scale.width * 0.5, scene.scale.height * 0.7, 'warriorCardPopUp')
    .setOrigin(0.5, 0.5)
    .setDepth(2)
    .setScale(0.7)
    .setVisible(false); // Initially set to invisible

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

  const hoverWarriorImageP2 = scene.add
    .image(scene.scale.width * 0.5, scene.scale.height * 0.7, 'warriorCardPopUp')
    .setOrigin(0.5, 0.5)
    .setDepth(2)
    .setScale(0.7)
    .setVisible(false); // Initially set to invisible

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

  const hoverNecromancerImageP2 = scene.add
    .image(scene.scale.width * 0.5, scene.scale.height * 0.7, 'necromancerCardPopUp')
    .setOrigin(0.5, 0.5)
    .setDepth(2)
    .setScale(0.7)
    .setVisible(false); // Initially set to invisible

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

  const hoverKnightImageP2 = scene.add
    .image(scene.scale.width * 0.5, scene.scale.height * 0.7, 'knightCardPopUp')
    .setOrigin(0.5, 0.5)
    .setDepth(2)
    .setScale(0.7)
    .setVisible(false); // Initially set to invisible

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

  const hoverBotImageP2 = scene.add
    .image(scene.scale.width * 0.5, scene.scale.height * 0.7, 'botCardPopUp')
    .setOrigin(0.5, 0.5)
    .setDepth(2)
    .setScale(0.7)
    .setVisible(false); // Initially set to invisible

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

  const hoverArcherImageP2 = scene.add
    .image(scene.scale.width * 0.5, scene.scale.height * 0.7, 'archerCardPopUp')
    .setOrigin(0.5, 0.5)
    .setDepth(2)
    .setScale(0.7)
    .setVisible(false); // Initially set to invisible

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
