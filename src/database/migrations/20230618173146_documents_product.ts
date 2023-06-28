import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('documents', (table) => {
    table.uuid('id').primary().unique();
    table.boolean('status');
    table.boolean('showInWeb');
    table.string('description');
    table.string('type');
    table.string('version');
    table.string('originalName');
    table.string('mimetype');
    table.integer('size');
    table.string('fileName');
    table.string('path').notNullable();

    table
      .uuid('productId')
      .notNullable()
      .references('id')
      .inTable('products')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');

    // Standards
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('documents');
}
