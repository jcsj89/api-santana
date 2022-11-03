import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('user_role', (table) => {
    table.uuid('id').primary().unique();
    table.uuid('user_id').references('id').inTable('users');
    table.uuid('role_id').references('id').inTable('roles');

    // Standards
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('user_role');
}
