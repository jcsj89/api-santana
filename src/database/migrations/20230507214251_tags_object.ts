import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('tags_objects', (table) => {
    table.uuid('id').primary().unique();
    table.uuid('tags_id').references('id').inTable('tags');
    table.uuid('object_id'); // some object id
    table.string('object_table_name'); // name of table

    // Standards
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTableIfExists('tags_objects');
}
