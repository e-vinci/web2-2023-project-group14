export default class Warrior {
    constructor() {
      this.health = 100;
      this.damage = 10;
      this.range = 10;
    }
  
    // Method to spawn the archer
    spawn() {
      console.log(`war has been spawned with ${  this.health  } health, ${  this.damage  } damage, and ${  this.range  } range.`);
    }
  
    // Method for the archer to attack
    attack() {
      console.log(`war attacks with ${  this.damage  } damage.`);
    }
  
    // Method for the archer to take damage
    takeDamage(amount) {
      this.health -= amount;
      console.log(`war takes ${  amount  } damage. Health is now ${  this.health}`);
    }
  }