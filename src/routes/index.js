import express from 'express';

import AppError from '../middlewares/AppError.js';
import userRoutes from '../modules/users/routes/userRoutes.js';

const routes = express.Router();

routes.use(userRoutes);

routes.get('/', (_, response) => {
    response.json({
        project: 'API Santana',
        description:
            'Esta api faz o acesso, permissoes e configuracoes do site da Santana Quimica',
        message: 'Just do it!',
    });
});

// test errors4
routes.get('/err', (_, __) => {
    throw new Error('Novo erro');
});

// test errors4
routes.get('/apperror', (_, __) => {
    throw new AppError('message');
});

export default routes;
