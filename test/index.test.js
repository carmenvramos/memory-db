const { MemoryDatabase } = require('../lib/index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();   
  });

  it('creates an object in the database', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    expect(createdCat.name).toEqual('fluffy');
  });

  it('can find an object by id', () => {
    const cat = { name: 'fluffy' };
    const createdCat = db.create(cat);
    // -> { name: 'fluffy', _id: 1234 }
    // createdCat._id === 1234

    const foundCat = db.findById(createdCat._id);
    expect(foundCat).toEqual(createdCat);
  });

  it('throws an error when no object is found for that id', () => {
    expect(() => {
      db.findById('notARealId');
    }).toThrowError('No object with _id notARealId');
  });

  it('finds a list of all objects', () => {
    const cat = { name: 'felix' };
    const cat2 = { name: 'garfield' };
    const createdCat = db.create(cat);
    const createdCat2 = db.create(cat2);
    const allCats = db.find();
    expect(allCats).toEqual[createdCat, createdCat2];
  });

  it('finds an object by id and updates it', () => {
    const cat = { name: 'felix' };
    const createdCat = db.create(cat);
    const id = createdCat._id;
    const changedCat = { name: 'garfield' };
    const updatedCat = db.findByIdAndUpdate(id, changedCat);
    expect(updatedCat.name).toEqual(changedCat.name);
  });

  it('throws an error if no object exits for the id', () => {
    const cat = { name: 'felix' };
    expect(() => {
      db.findByIdAndUpdate('123', cat);    
    }).toThrowError('No object with _id 123');
  });

  it('finds an object by Id and deletes it', () => {
    const cat = { name: 'felix' };
    const createdCat = db.create(cat);
    const id = createdCat._id;
    const deletedCat = db.findByIdAndDelete(id);
    expect(deletedCat).toEqual({ deleted: 1 });
  });

  it('throws an error if no object exits for the id', () => {
    const cat = { name: 'garfield' };
    expect(() => {
      db.findByIdAndUpdate('321', cat);    
    }).toThrowError('No object with _id 321');
  });

  it('deletes all keys in the database', () => {
    const results = db.drop();
    expect(results).toEqual({});
  });
});
