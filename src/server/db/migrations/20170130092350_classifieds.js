'use strict';

exports.up = function(knex, Promise) {
  return knex.schema.createTable('classifieds', (table) => {
    table.increments();
    table.string('title', 255).notNullable();
    table.text('description').notNullable();
    table.decimal('price').notNullable();
    table.string('item_image', 255).notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('classifieds');
};
