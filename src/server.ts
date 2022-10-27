import express, { NextFunction, Request, Response } from 'express';
import config from './config/index.js'; // config dotenv
import AppError from './middleware/AppError.js';

// constants
const port = config.port || 3333;

const app = express();

app.get('/', (req, res) => {
    throw new AppError('Erro forcado');
    res.json({ message: 'Hello World 2' });
});

// favicon 
app.get('/favicon.ico', (req, res) => {
    res.status(200).send('');
});

// 404 error
app.use((_: Request, res: Response, __: NextFunction) => {
    res.status(404).json({
        status: 404,
        message: 'Pagina nao encontrada',
    });
});

// ERROR
app.use((error: Error, _: Request, res: Response, __: NextFunction) => {
    console.log(error);

    if (error instanceof AppError) {
        res.status(error.statusCode).json({
            status: 'API Error',
            message: error.message,
        });
    }

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error' + error,
    });
});

// STARTUP
app.listen(port, () => {
    console.log(`Server Starts on Port ${port}`);
    console.log('Envioment: ', process.env.NODE_ENV);
});
