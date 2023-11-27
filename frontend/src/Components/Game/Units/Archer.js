export default class Archer {
    constructor() {
      this.health = 100;
      this.damage = 10;
      this.range = 50;
    }
  
    // Method to spawn the archer
    spawn() {
      console.log(`Archer has been spawned with ${  this.health  } health, ${  this.damage  } damage, and ${  this.range  } range.`);
    }
  
    // Method for the archer to attack
    attack() {
      console.log(`Archer attacks with ${  this.damage  } damage.`);
    }
  
    // Method for the archer to take damage
    takeDamage(amount) {
      this.health -= amount;
      console.log(`Archer takes ${  amount  } damage. Health is now ${  this.health}`);
    }
  }