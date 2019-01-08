// Factory function
const AnimalFactory = (name, species) => ({
  name,
  species,
  speak() {
    return `I am a ${this.species} and my name is ${this.name}`;

  }
});


// Constructor function
function AnimalConstructor(name, species) {
  this.name = name;
  this.species = species;
}

AnimalConstructor.prototype.speak = function() {
  return `I am a ${this.species} and my name is ${this.name}`;
};

// Class function (ES6)
class AnimalClass {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }
  static description() {
    throw 'You are required to implement the description method';
  }

  speak() {
    return `I am a ${this.species} and my name is ${this.name}`; 
  }
}

module.exports = {
  AnimalFactory,
  AnimalConstructor,
  AnimalClass
};
