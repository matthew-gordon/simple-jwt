process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const knex = require('../../src/server/db/knex');
const bcrypt = require('bcryptjs');
const server = require('../../server.js');

const authHelpers = require('../../src/server/db/auth/_helpers');
const localAuth = require('../../src/server/db/auth/local');

describe('auth : local', () => {

  describe('encodeToken()', () => {
    it('should return a token', (done) => {
      const user = { body: {id: 1, username: 'Matthew', password: "password123"} };
      const token = localAuth.encodeToken(user);
      // console.log(token);
      done();
    });
  });

  describe('decodeToken()', () => {
    it('should return a payload', (done) => {
      const user = { body: {id: 1, username: 'Matthew', password: "password123"} };
      const token = localAuth.encodeToken(user);
      should.exist(token);
      token.should.be.a('string');
      localAuth.decodeToken(token, (err, res) => {
        should.not.exist(err);
        res.sub.should.should.be.a('object');
        done();
      });
    });
  });

});
