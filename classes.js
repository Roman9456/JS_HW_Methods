class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Name must be between 2 and 10 characters long');
    }
    if (
      !['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(
        type
      )
    ) {
      throw new Error('Invalid character type');
    }

    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.defence = 0;

    switch (type) {
      case 'Bowman':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Swordsman':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Magician':
        this.attack = 10;
        this.defence = 40;
        break;
      case 'Undead':
        this.attack = 25;
        this.defence = 25;
        break;
      case 'Zombie':
        this.attack = 40;
        this.defence = 10;
        break;
      case 'Daemon':
        this.attack = 10;
        this.defence = 40;
        break;
    }
  }

  levelUp() {
    if (this.health === 0) {
      throw new Error('Character is dead and cannot level up');
    }

    this.level += 1;
    this.attack += Math.round(this.attack * 0.2);
    this.defence += Math.round(this.defence * 0.2);
    if (this.health < 100) {
      this.health = 100;
    }
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100);
    if (this.health < 0) {
      this.health = 0;
    }
  }
}

module.exports = Character;