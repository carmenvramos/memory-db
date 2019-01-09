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

  findByIdAndUpdate(_id, obj) {
    const copiedObj = { ...obj, _id };
    if(!this.store[_id]){
      throw `No object with _id ${_id}`;
    }
    else {
      this.store[_id] = copiedObj;
      return this.store[_id];
    }
  }

  findByIdAndDelete(_id) {
    if(!this.store[_id]){
      throw `No object with _id ${_id}`;
    }
    else {
      delete this.store[_id];
      return { deleted: 1 };
    }

  }

  drop() {
    this.store = {};
    return this.store;
  }
}

module.exports = { MemoryDatabase };
