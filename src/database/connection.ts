import knex, { Knex } from 'knex';

const environment = process.env.NODE_ENV || 'development';

import { config } from './knexfile';

let connection: Knex;

if (environment === 'development') {
    connection = knex(config.development);
} else {
    connection = knex(config.production);
}

export default connection;
