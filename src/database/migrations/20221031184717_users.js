/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    return await knex.schema
        .raw('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')
        .createTable('users', function (table) {
            table
                .uuid('id')
                .primary()
                .notNullable()
                .defaultTo(knex.raw('uuid_generate_v4()'));
            table.string('name');
            table.string('email');
            table.string('password_hash');
            table.boolean('isActive');
            table.boolean('isAdmin');

            // Standards
            table.timestamp('created_at').defaultTo(knex.fn.now());
            table.timestamp('updated_at').defaultTo(knex.fn.now());
        });
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    return await knex.schema.dropTable('users');
}
