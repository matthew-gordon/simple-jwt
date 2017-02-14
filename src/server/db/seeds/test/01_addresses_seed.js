'use strict';

exports.seed = function(knex, Promise) {
  return knex('addresses').del() // Deletes ALL existing entries
    .then(function() { // Inserts seed entries one by one in series
      return knex('addresses').insert({
        id: 1,
        line_1: '4545 S. Josephine ST.',
        city: 'Denver',
        zip: '80236',
        state_county_province: 'Colorado',
        country: 'United States'
      });
    }).then(function () {
      return knex('addresses').insert({
        id: 2,
        line_1: '18274 E. Mansfield AVE.',
        city: 'Aurora',
        zip: '80015',
        state_county_province: 'Colorado',
        country: 'United States'
      });
    }).then(function () {
      return knex('addresses').insert({
        id: 3,
        line_1: '1 Damian CT.',
        city: 'Maryland',
        zip: '21237',
        state_county_province: 'Colorado',
        country: 'United States'
      });
    }).then(function () {
      return knex('addresses').insert({
        id: 4,
        line_1: '1212 Broadway ST.',
        city: 'Centennial',
        zip: '80111',
        state_county_province: 'Colorado',
        country: 'United States'
      });
    }).then(function () {
      return knex('addresses').insert({
        id: 5,
        line_1: '1405 Grape St.',
        city: 'Denver',
        zip: '80236',
        state_county_province: 'Colorado',
        country: 'United States'
      });
    }).then(() => {
      return knex.raw("SELECT setval('addresses_id_seq', (SELECT MAX(id) FROM addresses))");
    });
};
