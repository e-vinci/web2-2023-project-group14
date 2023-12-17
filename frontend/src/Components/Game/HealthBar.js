import Phaser from 'phaser';

export default class HealthBar extends Phaser.GameObjects.Graphics {
  constructor(scene, x, y, health) {
    super(scene, x, y, health);
    this.health = health;
    this.maxWidth = 50;

    this.draw();
    scene.add.existing(this);
  }

  setHealth(health) {
    this.health = health;
    this.clear();
    this.draw();
  }

  draw() {
    // Dessiner la barre de vie en fonction de la santé actuelle
    const barWidth = (this.health / 100) * this.maxWidth;
    this.clear(); // clear the graphics object
    this.fillStyle(0x00ff00); // Couleur verte
    this.fillRect(0, 0, barWidth, 5); // Dessiner la barre de vie
  }
}

/* PISTE DE CODE POUR DANS LA GAMESCENE

this.healthBar1 = undefined;
    this.healthBar2 = undefined;


this.player1HealthBar= this.add.graphics();
    this.player2HealthBar= this.add.graphics();

    const barWidth = this.sys.game.config.width * 0.4; // 40% de la largeur de l'écran
    const barHeight = 11;
    const x1 = 0; // À gauche de l'écran
    const y1 = 0; // En haut de l'écran
    const x2 = this.sys.game.config.width - this.barWidth; // À droite de l'écran
    const y2 = 0; // En haut de l'écran

    // Affichage initial des barres de vie
    this.updateHealthBar(this.healthBar1, this.player1Stats.health, x1, y1, barWidth, barHeight);
    this.updateHealthBar(this.healthBar2, this.player2Stats.health, x2, y2, barWidth, barHeight);

 update() {
    this.updateHealthBar();
  }

updateHealthBar(healthBar, health, x, y, width, height) {
    healthBar.clear();
    healthBar.lineStyle(1, 0x000000, 1);
    healthBar.strokeRoundedRect(x, y, width, height, 3);
    
    const barColor = (health > 5000) ? 0x00ff00 : 0xff0000; // Vert au-dessus de 50%
    healthBar.fillStyle(barColor, 1);
    healthBar.fillRect(x + 1, y + 1, (width - 2) * (health / 10000), height - 2);
}
*/
