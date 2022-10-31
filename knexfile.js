import * as dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

export default {
    development: {
        client: 'pg',
        connection: process.env.DB_URL,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: path.join(__dirname, 'src', 'database', 'migrations'),
        },
    },

    production: {
        client: 'pg',
        connection: process.env.DB_URL,
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: 'knex_migrations',
            directory: path.join(__dirname, 'src', 'database', 'migrations'),
        },
    },
};
