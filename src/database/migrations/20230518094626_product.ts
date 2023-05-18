import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('product', (table) => {
    table.uuid('id').primary().unique();
    table.boolean('active');
    table.boolean('showInWeb');
    table.string('description');
    table.string('detailedProductDescription');
    table.string('codeProd');
    table.string('codeNCM');
    table.string('codeEAN');
    table.string('color');
    table.string('validity');
    table.string('brand');
    table.string('producer');
    table.string('size');
    table.decimal('price');
    table.decimal('priceUnit');
    table.decimal('discountValue');
    table.decimal('discountPercent');
    table.decimal('cost');
    table.integer('inventory');
    table.decimal('inventoryCost');
    table.decimal('density');
    table.decimal('freeWeight');
    table.decimal('grossWeight');
    // relationships
    table.string('category'); // N : N
    table.string('tags'); // N : N
    table.string('embalagem_id'); // N : 1
    table.string('photos');

    table.string('fispq_id'); // 1 : N
    // Standards
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('product');
}
