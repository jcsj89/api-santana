import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import config from './config/index.js'; // config dotenv
import AppError from './middleware/AppError.js';
import routes from './routes/index.js';

// constants
const port = config.port || 3333;

const app = express();

// ROUTES
app.use(routes);

// favicon - ainda nao resolveu o problema
app.use((req, res, next: NextFunction) => {
    if (req.originalUrl && req.originalUrl.split('/').pop() === 'favicon.ico') {
        return res.sendStatus(204);
    }
    next();
});

// 404 error
app.use((req: Request, res: Response) => {
    res.status(404).json({
        status: 404,
        message: 'Pagina nao encontrada.',
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
