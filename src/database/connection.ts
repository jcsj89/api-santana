import knex from 'knex';

const environment = process.env.NODE_ENV || 'development';
// eslint-disable-next-line @typescript-eslint/no-var-requires
import { database2 } from './knexfile.js';

const connection = database2;

export default connection;
