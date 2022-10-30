import { NextFunction, Request, Response } from 'express';
import AppError from './AppError';

const errorHandling = (
    error: Error,
    req: Request,
    res: Response,
    next: NextFunction
) => {
    if (error instanceof AppError) {
        return res.status(500).json({
            status: 'API Error',
            statusCode: 500,
            message: error.message,
        });
    }

    console.log(error);

    return res.status(500).json({
        status: 'error',
        message: 'Internal server error',
    });
};

const error404 = (req: Request, res: Response) => {
    const status = 404;
    const message = 'Pagina nao encontrada.';

    return res.status(status).json({
        status,
        message,
    });
};

export { errorHandling, error404 };
