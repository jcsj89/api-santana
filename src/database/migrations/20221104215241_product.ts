import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('products', (table) => {
    table.uuid('id').unique().primary();
    table.string('name');
    table.string('description');
    table.integer('price');
    table.string('category');
    table.integer('estoque');
    table.integer('discount');
    table.string('fispq');
    table.string('tags');
    table.string('peso');
    table.string('cor');
    table.string('embalagens');
    table.string('ean');
    table.string('validade');
    table.string('marca');
    table.string('tamanho');
    table.string('fabricante');
    table.boolean('active');

    // Standards
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('products');
}
