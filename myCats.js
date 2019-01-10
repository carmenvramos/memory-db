const cat = {
  name: 'Felix',
  speak() {
    console.log('Meow, my name is ' + `${this.name}`);
  }
};

cat.speak();
// -> Meow, my name is fluffy

// using factory function
const createCat = name => ({
  name,
  speak() {
    console.log('Meow, my name is ' + `${this.name}`);
  }
});


// using Constructor function
function Cat(name) {
  this.name = name;
}
Cat.prototype.speak = function() {
  console.log(`Meow my name is ${this.name}`);
};


// using Class
class CatClass {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log('Meow, my name is ' + `${this.name}`);
  }
}

const felix = createCat ('Felix');
const whiskers = createCat ('whiskers');
felix.speak();
whiskers.speak();

const bingo = new Cat('bingo');
bingo.speak();

// eslint-disable-next-line no-unused-vars
const myCatFelix = new CatClass('Felix');



