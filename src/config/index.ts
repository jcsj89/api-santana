import dotenv from 'dotenv';

dotenv.config();

export default {
  secret: process.env.APP_SECRET || 'e30e68e3-3974-4bc6-a8b8-ce1b84c41177',
  port: process.env.PORT || 3333,
  env: process.env.NODE_ENV || 'development',
  token: process.env.JWT_SECRET || 'b516f661-6fac-4fd9-8543-9942a3cc81f7',
  tokenTest:
    process.env.JWT_TEST_SECRET || '3f875dcb-4a72-431c-b1f1-cc45efa97342',
};

export const database = {
  url: process.env.DB_URL,
};
