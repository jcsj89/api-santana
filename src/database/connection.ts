import knex from 'knex';

let environment = process.env.NODE_ENV || 'development';

environment !== 'development' && environment !== 'production'
  ? (environment = 'production')
  : null;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const config = require('./knexfile')[environment];

const connection = knex(config);

export default connection;
