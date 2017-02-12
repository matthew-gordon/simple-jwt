'use strict';

const knex = require('./knex');

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

function add(user) {
  return users().insert(user);
}

module.exports = {
  getUsers,
  getSingle,
  add
};
