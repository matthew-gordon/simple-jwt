'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) => {
    table.increments();
    table.integer('address_id').references('addresses.id').onDelete('CASCADE');
    table.text('username').notNullable();
    table.text('first_name');
    table.text('middle_name');
    table.text('last_name');
    table.text('email').unique();
    table.text('password').notNullable();
    table.text('bio').defaultTo('Complete your profile!');
    table.text('date_of_birth');
    table.timestamps(true, true);
    table.boolean('admin').defaultTo(false);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users');
};
