'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('addresses', (table) => {
    table.increments();
    table.text('line_1').notNullable().defaultTo('');
    table.text('line_2').notNullable().defaultTo('');
    table.text('line_3').notNullable().defaultTo('');
    table.text('city').notNullable().defaultTo('');
    table.text('zip').notNullable().defaultTo('');
    table.text('state_county_province').notNullable().defaultTo('');
    table.text('country').notNullable().defaultTo('');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('addresses');
};
