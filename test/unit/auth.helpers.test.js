process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const knex = require('../../src/server/db/knex');
const bcrypt = require('bcryptjs');
const server = require('../../server.js');

const authHelpers = require('../../src/server/db/auth/_helpers');

describe('auth : helpers', () => {

  beforeEach(() => {
    return knex.migrate.rollback()
    .then(() => { return knex.migrate.latest(); })
    .then(() => { return knex.seed.run(); });
  });

  afterEach(() => {
    return knex.migrate.rollback();
  });

  describe('comparePass()', () => {
    it('should return true if the password is correct', (done) => {
     const salt = bcrypt.genSaltSync();
     const hash = bcrypt.hashSync('test', salt);
     const results = authHelpers.comparePass('test', hash);
     should.exist(results);
     results.should.eql(true);
     done();
    });
    it('should return false if the password is correct', (done) => {
     const salt = bcrypt.genSaltSync();
     const hash = bcrypt.hashSync('test', salt);
     const results = authHelpers.comparePass('testing', hash);
     should.exist(results);
     results.should.eql(false);
     done();
    });
    it('should return false if the password empty', (done) => {
     const salt = bcrypt.genSaltSync();
     const hash = bcrypt.hashSync('test', salt);
     const results = authHelpers.comparePass('', hash);
     should.exist(results);
     results.should.eql(false);
     done();
    });
  });

});

/* Client: Enter your email and password into the login form.
Client: On form submit call $auth.login() with email and password.
Client: Send a POST request to /auth/login.
Server: Check if email exists, if not - return 401.
Server: Check if password is correct, if not - return 401.
Server: Create a JSON Web Token and send it back to the client.
Client: Parse the token and save it to Local Storage for subsequent use after page reload. */
