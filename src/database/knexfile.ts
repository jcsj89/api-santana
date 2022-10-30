import 'ts-node/register';
import path from 'path';

import { database } from '../config/index';

const config = {
    development: {
        client: 'pg',
        connection: database.url,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            extension: 'ts',
            directory: path.resolve(__dirname, 'migrations'),
            loadExtensions: ['.ts', '.js'],
        },
    },

    production: {
        client: 'pg',
        connection: database.url,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: path.resolve(__dirname, 'migrations'),
            extension: '.ts',
            loadExtensions: ['.ts', '.js'],
        },
    },
};

// export { config };
module.exports = config;
