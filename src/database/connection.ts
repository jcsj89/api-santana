import knex, { Knex } from 'knex';

const environment = process.env.NODE_ENV || 'development';

import config = require('./knexfile');

const connection = knex(config[environment]);

export default connection;
