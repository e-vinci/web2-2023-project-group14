import baseSpriteSheet from '../../../assets/playerBase.png';

export function preloadPlayerBase(scene) {
  scene.load.spritesheet('base', baseSpriteSheet, { frameWidth: 200, frameHeight: 400 });
}

export function createPlayerBase(scene) {
 


  // Ajoutez les bases des joueurs à la scène.
  const base1 = scene.add.sprite(50, 250, 'base').setOrigin(0.5, 0.5).setDepth(1);
  base1.setInteractive(scene.input.makePixelPerfect());
  const base2 = scene.add.sprite(750, 250, 'base').setOrigin(0.5, 0.5).setDepth(1);
  base2.setInteractive(scene.input.makePixelPerfect());

  // Redimensionnage
  const scaleFactor = 0.5; // Ajustez cette valeur selon vos besoins.
  base1.setScale(scaleFactor).setDepth(1);
  base2.setScale(scaleFactor).setDepth(1);

  // Ajoutez l'animation flottante à chaque base.
  base1.play('baseFloating').setDepth(1);
  base2.play('baseFloating').setDepth(1);
}