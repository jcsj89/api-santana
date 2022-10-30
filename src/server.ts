import 'pg';
import './database/connection';
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import config from './config/index'; // config dotenv

import routes from './routes/index';
import cors from 'cors';

import path from 'path';

import { errorHandling, error404 } from './middlewares/ErrorHandling';

// constants
const port = config.port || 3333;

const app = express();

// static folder
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors());

// ROUTES
app.use(routes);

// ERROR AND 404 PAGE NOT FOUND
app.use(error404);
app.use(errorHandling);

// STARTUP
app.listen(port, () => {
    console.log(`Server Starts on Port ${port}`);
    console.log('Envioment: ', process.env.NODE_ENV);
});
