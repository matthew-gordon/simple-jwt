'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('members_groups', (table) => {
    table.integer('user_id').notNullable().references('users.id').onDelete('CASCADE');
    table.integer('group_id').notNullable().references('groups.id').onDelete('CASCADE');
    table.timestamp('date_joined').defaultTo(knex.fn.now());
    table.timestamp('date_left');
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('members_groups');
};
