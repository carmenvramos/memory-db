const { AnimalConstructor, AnimalFactory, AnimalClass } = require('./animal');

describe('Animal Creators', () => {
  describe('Animal Constructor', () => {
    it('has a speak method', () => {
      const animal = new AnimalConstructor('Simba', 'lion');
      expect(animal.speak()).toEqual('I am a lion and my name is Simba');

    });
  });
  
  describe('AnimalFactory', () => {
    it('has a speak method', () => {
      const animal = AnimalFactory('Simba', 'lion');
      expect(animal.speak()).toEqual('I am a lion and my name is Simba');
    });
  });

  describe('AnimalClass', () => {
    it('has a speak method', () => {
      const animal = new AnimalClass('Simba', 'lion');
      expect(animal.speak()).toEqual('I am a lion and my name is Simba');
    });

    it('description throws an error', () => {
      try {
        expect(AnimalClass.description()).toThrowError();
      } catch(error) {
        expect(error).toEqual('You are required to implement the description method');
      }
    });
  });  

  it('implements all three creators the same', () => {
    const animalConstructor = new AnimalConstructor('Simba', 'lion');
    const animalFactory = AnimalFactory('Simba', 'lion');
    const animalClass = new AnimalClass('Simba', 'lion');

    expect(animalConstructor.speak()).toEqual(animalFactory.speak());
    expect(animalFactory.speak()).toEqual(animalClass.speak());
  });
});
  
