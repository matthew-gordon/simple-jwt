'use strict';

exports.seed = function(knex, Promise) {
  return knex('members_groups').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('members_groups').insert({
        user_id: 1,
        group_id: 1
      });
    }).then(function () {
      return knex('members_groups').insert({
        user_id: 2,
        group_id: 2
      });
    }).then(function () {
      return knex('members_groups').insert({
        user_id: 3,
        group_id: 3
      });
    }).then(function () {
      return knex('members_groups').insert({
        user_id: 4,
        group_id: 4
      });
    }).then(function () {
      return knex('members_groups').insert({
        user_id: 5,
        group_id: 5
      });
    });
};
