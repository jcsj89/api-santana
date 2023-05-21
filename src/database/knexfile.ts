// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path');

//eslint-disable-next-line @typescript-eslint/no-var-requires
const dotenv = require('dotenv');
dotenv.config();

module.exports = {
  development: {
    client: 'pg',
    connection: process.env.DB_URL,
    migrations: {
      directory: path.resolve(__dirname, 'migrations'),
    },
    useNullAsDefault: true,
    logging: true,
  },
  production: {
    client: 'pg',
    connection: {
      connectionString: process.env.DB_URL,
      // connection: process.env.DB_URL,
      ssl: true,
    },
    migrations: {
      directory: path.resolve(__dirname, 'migrations'),
    },
    useNullAsDefault: true,
    pool: {
      min: 2,
      max: 10,
    },
  },
};
