import knex from 'knex';
import config from '../config';

let environment = config.env || 'development';

config.env !== 'development' && config.env !== 'production'
  ? (environment = 'development')
  : null;

// eslint-disable-next-line @typescript-eslint/no-var-requires
const knexConfig = require('./knexfile')[environment];

const connection = knex(knexConfig);

export default connection;
