const { AnimalClass } = require('./animal');

class Cat extends AnimalClass {
  constructor(name) {
    super(name, 'cat');
  }

  static description() {
    return 'All cats have four legs';
  }

  static typeOfSpecies() {
    return 'cat';
  }

  // overriding a method
  speak() {
    return `Meow, I am ${this.name}`;
  }
}

module.exports = Cat;
