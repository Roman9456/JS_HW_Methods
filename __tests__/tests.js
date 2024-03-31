const Character = require('../classes');


describe('Character', () => {
  it('should throw an error if the name length is less than 2 characters', () => {
    expect(() => new Character('A', 'Bowman')).toThrowError('Name must be between 2 and 10 characters long');
  });

  it('should throw an error if the name length is more than 10 characters', () => {
    expect(() => new Character('SuperLongName', 'Bowman')).toThrowError('Name must be between 2 and 10 characters long');
  });

  it('should throw an error if the character type is invalid', () => {
    expect(() => new Character('Megumin', 'InvalidType')).toThrowError('Invalid character type');
  });


  it('should set health to 0 if damage received is greater than current health', () => {
    const megumin = new Character('Megumin', 'Magician');
    megumin.health = 10;
    megumin.damage(150);
    expect(megumin.health).toBe(0);
  });

  it('should set the attack and defence values based on the character type', () => {
    const bowman = new Character('Legolas', 'Bowman');
    expect(bowman.attack).toBe(25);
    expect(bowman.defence).toBe(25);

    const swordsman = new Character('Arthur', 'Swordsman');
    expect(swordsman.attack).toBe(40);
    expect(swordsman.defence).toBe(10);

    const magician = new Character('Gandalf', 'Magician');
    expect(magician.attack).toBe(10);
    expect(magician.defence).toBe(40);

    const undead = new Character('Arthas', 'Undead');
    expect(undead.attack).toBe(25);
    expect(undead.defence).toBe(25);

    const zombie = new Character('Zombie', 'Zombie');
    expect(zombie.attack).toBe(40);
    expect(zombie.defence).toBe(10);

    const daemon = new Character('Daemon', 'Daemon');
    expect(daemon.attack).toBe(10);
    expect(daemon.defence).toBe(40);
  });

  it('should increase level by 1 when calling levelUp() method', () => {
    const megumin = new Character('Megumin', 'Magician');
    megumin.levelUp();
    expect(megumin.level).toBe(2);
  });

  it('should increase attack and defence values by 20% when calling levelUp() method', () => {
    const megumin = new Character('Megumin', 'Magician');
    megumin.levelUp();
    expect(megumin.attack).toBe(12);
    expect(megumin.defence).toBe(48);
  });

  it('should set health to 100 when calling levelUp() method if health is less than 100', () => {
    const megumin = new Character('Megumin', 'Magician');
    megumin.health = 80;
    megumin.levelUp();
    expect(megumin.health).toBe(100);
  });

  it('should throw an error when calling levelUp() method if health is 0', () => {
    const megumin = new Character('Megumin', 'Magician');
    megumin.health = 0;
    expect(() => megumin.levelUp()).toThrowError('Character is dead and cannot level up');
  });
}); 

it('should increase attack, defence, and health values by 20% when calling levelUp() method', () => {
    const megumin = new Character('Megumin', 'Magician');
    megumin.health = 100;
    expect(megumin.attack).toBe(10); 
    expect(megumin.defence).toBe(40); 
    megumin.levelUp();
    expect(megumin.attack).toBe(12); 
    expect(megumin.defence).toBe(48); 
    expect(megumin.health).toBe(100); 
  });
  
  it('should set health to 100 when calling levelUp() method if health is less than 100', () => {
    const megumin = new Character('Megumin', 'Magician');
    megumin.health = 80;
    megumin.levelUp();
    expect(megumin.health).toBe(100);
  });
  
  it('should throw an error when calling levelUp() method if health is 0', () => {
    const megumin = new Character('Megumin', 'Magician');
    megumin.health = 0;
    expect(() => megumin.levelUp()).toThrowError('Character is dead and cannot level up');
  }); 

