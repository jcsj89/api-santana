import knex from 'knex';

const environment = process.env.NODE_ENV || 'development';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./knexfile')[environment];

const connection = knex(config);

export default connection;
