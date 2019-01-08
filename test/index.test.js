const { MemoryDatabase } = require('../lib/index');

describe('memory database', () => {
  let db = null;
  beforeEach(() => {
    db = new MemoryDatabase();   
  });

  // store = { { name: 'fluffy'} }

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
  
  });
});