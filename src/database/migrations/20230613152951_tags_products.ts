import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tags_products', (table) => {
    table.uuid('id').primary().unique();
    table.uuid('tag_id').references('id').inTable('tags');
    table.uuid('product_id').references('id').inTable('products');

    // Standards
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('tags_products');
}
