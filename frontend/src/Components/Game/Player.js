class Player {
  
  static DEFAULT_GOLDS = 0;

  static DEFAULT_MAX_UNITS = 5;

  static DEFAULT_HEALTH = 1000;

  golds;

  playerName;

  health;

  haveLost = false;

  constructor(playerName) {
    this.golds = Player.DEFAULT_GOLDS;
    this.health = Player.DEFAULT_HEALTH;
    this.playerName = playerName;
  }

  addGolds(amount) {
    this.golds += amount;
    return this.golds;
  }

  playerIsDead() {
    if (this.health <= 0) {
      this.haveLost = true;
      return true;
    }
    return false;
  }
}

export default Player;
