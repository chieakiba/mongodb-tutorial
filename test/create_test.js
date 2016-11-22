const assert = require('assert');
const User = require('./../src/user')

describe('Creating records', () => { //use intuitive names for the string (what it is testing for)
  it('saves a user', () => {
    //Assertion - testing to see if your program is running properly
    const joe = new User({ name: 'Joe' });

    joe.save(); //saves/insert this object into the databast
  });
});
