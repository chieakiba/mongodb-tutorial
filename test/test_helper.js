const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/users_test');
mongoose.connection
  .once('open', () => console.log('Good to go!'))
  .on('error', (error) => {
    console.warn('Warning', error);
  });

beforeEach((done) => { //done callback so tells mocha that when done with a particular thing (in this case finished clearing the database)
  mongoose.connection.collections.users.drop(() => {
    //Ready to run the next test
    done();
  }); //deletes the database so the test will start with a cleared database
})
