// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }
  attack() {
    return this.strength;
  }

  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super(health, strength);
    this.name = name;
  }
  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return this.name + " has died in act of combat";
    } else {
      return this.name + " has received " + damage + " points of damage";
    }
  }

  battleCry() {
    return "Odin Owns You All!";
  }
}

// Saxon
class Saxon extends Soldier {
  constructor(health, strength) {
    super(health, strength);
  }

  receiveDamage(damage) {
    this.health -= damage;
    if (this.health <= 0) {
      return "A Saxon has died in combat";
    } else {
      return "A Saxon has received " + $damage + " points of damage";
    }
  }
}
// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }
  addViking(viking) {
    this.vikingArmy.push(viking);
  }
  addSaxon(saxon) {
    this.saxonArmy.push(saxon);
  }
  vikingAttack() {
    const Idx = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[Idx];

    const Indx = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[Indx];

    const damage = randomSaxon.receiveDamage(randomViking.strength);

    this.saxonArmy = this.saxonArmy.filter(function(saxonSoldier) {
      return saxonSoldier.health > 0;
    });

    return damage;
  }
  saxonAttack() {
    const Idx = Math.floor(Math.random() * this.saxonArmy.length);
    const randomSaxon = this.saxonArmy[Idx];

    const Indx = Math.floor(Math.random() * this.vikingArmy.length);
    const randomViking = this.vikingArmy[Indx];

    const damage = randomViking.receiveDamage(randomSaxon.strength);

    this.vikingArmy = this.vikingArmy.filter(function(vikingSoldier) {
      return vikingSoldier.health > 0;
    });

    return damage;
  }
  showStatus() {
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survive another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
