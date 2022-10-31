import 'pg';
import './database/knex.js';
import express from 'express';
import 'express-async-errors';
import config from './config/index.js'; // config dotenv

import routes from './routes/index.js';
import cors from 'cors';

import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import { errorHandling, error404 } from './middlewares/ErrorHandling.js';

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
    console.log('Envioment: ', config.env);
});
