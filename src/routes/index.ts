import { Request, Response, Router } from 'express';
import connection from '../database/connection.js';
import AppError from '../middlewares/AppError.js';
import userRoutes from '../modules/users/routes/user.routes.js';

const routes = Router();

routes.use(userRoutes);

routes.get('/', (_, response: Response) => {
    const conn = connection.migrate.status();
    console.log(conn);

    response.json({
        project: 'API Santana',
        description:
            'Esta api faz o acesso, permissoes e configuracoes do site da Santana Quimica',
        message: 'Just do it!',
    });
});

// test errors4
routes.get('/err', (_: Request, __: Response) => {
    throw new Error('Novo erro');
});

// test errors4
routes.get('/apperror', (_: Request, __: Response) => {
    throw new AppError('ERRO GERADO PELO APP ERROR');
});

export default routes;
