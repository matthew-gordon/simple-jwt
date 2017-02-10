'use strict';

const knex = require('../knex');
const bcrypt = require("bcryptjs");

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
  return bcrypt.compareSync(userPassword, databasePassword);
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
  comparePass
};
