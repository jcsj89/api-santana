
import AppError from './AppError.js';

const errorHandling = (error, req, res, next) => {
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

const error404 = (req, res) => {
    const status = 404;
    const message = 'Pagina nao encontrada.';

    return res.status(status).json({
        status,
        message,
    });
};

export { errorHandling, error404 };
