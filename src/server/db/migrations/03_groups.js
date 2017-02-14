'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('groups', (table) => {
    table.increments();
    table.integer('created_by_user_id').notNullable().references('users.id').onDelete('CASCADE');
    table.text('group_name').notNullable().defaultTo('');
    table.text('group_description').notNullable().defaultTo('');
    table.timestamps(true, true);
    table.timestamp('ended_at').defaultTo(knex.fn.now());
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('groups');
};
