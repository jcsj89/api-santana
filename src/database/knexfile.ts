import { database } from '../config/index.js';

import 'ts-node/register';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

import knex from 'knex';
import { Knex } from 'knex';

// Update with your config settings.

const config: { [key: string]: Knex.Config } = {
    development: {
        client: 'postgresql',
        connection: database.url,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            // directory: path.resolve('migrations'),
            extension: 'ts',
        },
    },

    production: {
        client: 'postgresql',
        connection: database.url,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
        },
    },
};

const database2 = knex({
    client: 'postgresql',
    connection: database.url,
    pool: {
        min: 2,
        max: 10,
    },
    migrations: {
        tableName: 'knex_migrations',
        directory: path.resolve(__dirname, 'migrations'),
    },
});
export { database2 };
// module.exports = config;
