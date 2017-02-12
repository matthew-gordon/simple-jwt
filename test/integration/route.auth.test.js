'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
const knex = require('../../src/server/db/knex');
const server = require('../../server');

chai.use(chaiHttp);

describe('routes : auth', () => {

  beforeEach(() => {
    return knex.migrate.rollback()
    .then(() => { return knex.migrate.latest(); })
    .then(() => { return knex.seed.run(); });
  });

  afterEach(() => {
    return knex.migrate.rollback();
  });

  describe('POST /auth/register', () => {
    it('should register a new user', (done) => {
      chai.request(server)
      .post('/auth/register')
      .send({
        username: 'fitzgerald',
        password: 'password123'
      })
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.should.be.json;
        res.body.should.have.keys('message', 'token');
        res.body.message.should.eql('Registered');
        done();
      });
    });
    it('should throw an error if username exists', (done) => {
      chai.request(server)
      .post('/auth/register')
      .send({
        username: 'matt',
        password: 'password123'
      })
      .end((err, res) => {
        should.exist(err);
        err.should.have.status(500);
        done();
      });
    });
  });

});
