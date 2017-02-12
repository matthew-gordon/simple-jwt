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
    return res.status(400).json({
      status: 'Please log in'
    });
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
      return getSingle(payload.sub.username).first()
      .then((user) => {
        return res.status(200).json({
          status: 'success',
          username: user.username,
          admin: user.admin
        });
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
