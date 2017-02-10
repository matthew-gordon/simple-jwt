'use strict';

process.env.NODE_ENV = 'test';

const chai = require('chai');
const should = chai.should();
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const server = require('../../server');
const knex = require('../../src/server/db/knex');

describe('routes : auth', () => {

  beforeEach(() => {
    return knex.migrate.rollback()
    .then(() => { return knex.migrate.latest(); })
    .then(() => { return knex.seed.run(); });
  });

  afterEach(() => {
    return knex.migrate.rollback();
  });

  describe('POST /auth/register ', () => {
    it('should register a new user', (done) => {
      chai.request(server)
      .post('/auth/register')
      .send({
        username: 'matthew',
        password: 'gordon',
      })
      .end((err, res) => {
        res.should.have.status(200);
        res.body.should.be.a('object');
        res.body.should.have.property('message');
        res.body.message.should.eql('success');
        done();
      });
    });
  });

  describe('POST /auth/login', () => {
    it('should login a user', (done) => {
      chai.request(server)
      .post('/auth/login')
      .send({
        username: 'chris',
        password: 'password123'
      })
      .end((err, res) => {
        should.not.exist(err);
        res.should.have.status(200);
        res.should.be.a('object');
        res.body.should.include.keys('status', 'token');
        res.body.status.should.eql('success');
        should.exist(res.body.token);
        done();
      });
    });
    it('should not login an unregistered user', (done) => {
      chai.request(server)
      .post('/auth/login')
      .send({
        username: 'michael',
        password: 'johnson123'
      })
      .end((err, res) => {
        should.exist(err);
        res.status.should.eql(500);
        res.type.should.eql('application/json');
        res.body.status.should.eql('error');
        done();
      });
    });
  });

  describe('GET /auth/user', () => {
  it('should return a success', (done) => {
    chai.request(server)
    .post('/auth/login')
    .send({
      username: 'chris',
      password: 'password123'
    })
    .end((error, response) => {
      should.not.exist(error);
      chai.request(server)
      .get('/auth/user')
      .set('authorization', 'Bearer ' + response.body.token)
      .end((err, res) => {
        console.error(err);
        should.not.exist(err);
        res.status.should.eql(200);
        res.type.should.eql('application/json');
        res.body.status.should.eql('success');
        done();
      });
    });
  });
  it('should throw an error if a user is not logged in', (done) => {
    chai.request(server)
    .get('/auth/user')
    .end((err, res) => {
      should.exist(err);
      res.status.should.eql(400);
      res.type.should.eql('application/json');
      res.body.status.should.eql('Please log in');
      done();
    });
  });
});

});
