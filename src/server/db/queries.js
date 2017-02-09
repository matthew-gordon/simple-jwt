'use strict';

const knex = require('./knex');

// *** Helper *** //

function classifieds() {
  return knex('classifieds').select('id', 'title', 'description', 'price', 'item_image');
}

// *** classifieds queries *** //

function getAll() {
  return classifieds();
}

function getSingle(classifiedID) {
  return classifieds().where('id', parseInt(classifiedID)).first();
}

function add(classified) {
  return classifieds().insert(classified, 'id');
}

function update(classifiedID, updates) {
  return classifieds().where('id', parseInt(classifiedID)).update(updates);
}

function deleteClassified(classifiedID) {
  return classifieds().where('id', parseInt(classifiedID)).del();
}

module.exports = {
  getAll: getAll,
  getSingle: getSingle,
  add: add,
  update: update,
  deleteClassified: deleteClassified
};
