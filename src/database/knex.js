import knex from 'knex';

const environment = process.env.NODE_ENV || 'development';

// eslint-disable-next-line @typescript-eslint/no-var-requires
import config from '../../knexfile.js';

const connection = knex(config[environment]);

export default connection;
