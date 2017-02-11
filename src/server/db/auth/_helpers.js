'use strict';

const knex = require('../knex');
const bcrypt = require("bcryptjs");
const localAuth = require('./local');

// *** utilities *** //

function createUser(req) {
  const salt = bcrypt.genSaltSync();
  const hash = bcrypt.hashSync(req.body.password, salt);
  return knex('users')
  .insert({
    username: req.body.username,
    password: hash
  })
  .returning('*');
}

function comparePass(userPassword, databasePassword) {
  const bool = bcrypt.compareSync(userPassword, databasePassword);
  if (!bool) { console.error('Bad password'); return false; }
  else { return true; }
}

function ensureAuthenticated(req, res, next) {
  if (!(req.headers && req.headers.authorization)) {
    console.log(req.headers.authorization);
    console.log(req.headers);
  }
  // decode the token
  var header = req.headers.authorization.split(' ');
  var token = header[1];
  localAuth.decodeToken(token, (err, payload) => {
    if (err) {
      return res.status(401).json({
        status: 'Token has expired'
      });
    } else {
      // check if the user still exists in the db
      return knex('users').where({id: parseInt(payload.sub.id)}).first()
      .then((payload) => {
        next();
      })
      .catch((err) => {
        res.status(500).json({
          status: 'error',
          error: err
        });
      });
    }
  });
}

// *** query helper *** //

function users() {
  return knex('users');
}

// *** queries *** //

function getUsers() {
  return users().select();
}

function getSingle(username) {
  return users().where('username', username).first();
}

module.exports = {
  createUser,
  getUsers,
  getSingle,
  comparePass,
  ensureAuthenticated
};
