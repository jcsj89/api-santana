import * as dotenv from 'dotenv';
import 'express-async-errors';
import 'pg';
dotenv.config();

import { errors } from 'celebrate';

import express, { NextFunction, Request, Response } from 'express';

import cors from 'cors';

import path from 'path';

import './database/connection';
import AppError from './middlewares/AppError';
import routes from './routes';

// CONSTANTS
const PORT = process.env.PORT || 3333;

// EXEC
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// SETUP CORS
app.use(cors());

// STATIC FOLDERS
app.use('/public', express.static(path.resolve(__dirname, '..', 'public')));

// DATABASE CONECTION
const isProduction = process.env.NODE_ENV === 'production';

if (isProduction) {
  console.log('DATABASE IN PRODUCTION [OK] - ', process.env.JWT_SECRET);
} else {
  console.log('DATABASE IN DEVLOPMENT [OK] - ', process.env.JWT_TEST_SECRET);
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  // const teste = require('./tests/knex.test');
}

// SETUP ROUTES
app.use(routes);

app.use(errors()); // celebrate errors

// TRATAMENTO DE ERROS
app.use((error: Error, __: Request, response: Response, _: NextFunction) => {
  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'API Error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
    errorName: error.name,
    error: error.message,
    errorStack: error.stack,
  });
});

// STARTUP
app.listen(PORT, () => {
  console.log('Server Started on port ', PORT);
});
