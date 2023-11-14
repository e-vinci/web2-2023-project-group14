class Player {
  static DEFAULT_GOLDS = 100;

  static DEFAULT_MAX_UNITS = 5;

  static DEFAULT_HEALTH = 200;

  golds;

  health;

  constructor() {
    this.golds = Player.DEFAULT_GOLDS;
    this.health = Player.DEFAULT_HEALTH;
  }

  addGolds(amount) {
    this.golds += amount;
    return this.golds;
  }

  playerIsDead() {
    if (this.health <= 0) return true;
    return false;
  }
}

export default Player;