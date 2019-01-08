const shortid = require('shortid');

class MemoryDatabase {
  constructor() {
    this.store = {};
  }

  create(obj) {
    const _id = 1234;
    const copiedObj = { ...obj, _id };
    this.store[_id] = copiedObj;
    return copiedObj;
  }

  findById(_id) {
    if(!this.store[_id]){
      throw `No object with _id ${_id}`;
    }
    return this.store[_id];
    
  }
  find() {
    return Object.values(this.store);
  }
}

module.exports = { MemoryDatabase };

 