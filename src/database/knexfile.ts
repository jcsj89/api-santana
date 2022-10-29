import 'ts-node/register';
import path from 'path';
import { fileURLToPath } from 'url';
// const __dirname = path.dirname(fileURLToPath(import.meta.url));
// import { database } from '../config/index.js';

const config = {
    development: {
        client: 'postgresql',
        connection: process.env.DB_URL,
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
        client: 'postgresql',
        // connection: database.url,
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

export { config };
// module.exports = config;
