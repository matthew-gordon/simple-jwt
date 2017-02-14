'use strict';

exports.seed = function(knex, Promise) {
  return knex('groups').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('groups').insert({
        id: 1,
        created_by_user_id: 5,
        group_name: 'The Laxers',
        group_description: 'FIll out a description!'
      });
    }).then(function () {
      return knex('groups').insert({
        id: 2,
        created_by_user_id: 4,
        group_name: 'The Planners',
        group_description: 'FIll out a description!'
      });
    }).then(function () {
      return knex('groups').insert({
        id: 3,
        created_by_user_id: 3,
        group_name: 'The Banners',
        group_description: 'FIll out a description!'
      });
    }).then(function () {
      return knex('groups').insert({
        id: 4,
        created_by_user_id: 2,
        group_name: 'The Lovers',
        group_description: 'FIll out a description!'
      });
    }).then(function () {
      return knex('groups').insert({
        id: 5,
        created_by_user_id: 1,
        group_name: 'The Haters',
        group_description: 'FIll out a description!'
      });
    }).then(() => {
      return knex.raw("SELECT setval('groups_id_seq', (SELECT MAX(id) FROM groups))");
    });
};
