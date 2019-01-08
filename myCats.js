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
})

const felix = createCat ('Felix');
const whiskers = createCat ('whiskers');
fluffy.speak();
whiskers.speak();

// using Class
class CatClass {
  constructor(name) {
    this.name = name;
  }
  speak() {
    console.log('Meow, my name is ' + `${this.name}`);
  }
}

const myCatFelix = new CatClass('Felix');
whiskers.speak();


// using Constructor function
function Cat(name) {
  this.name = name;
}
Cat.prototype.speak();

