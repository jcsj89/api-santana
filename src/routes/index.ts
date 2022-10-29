import { Request, Response, Router } from 'express';
import connection from '../database/connection';
import AppError from '../middlewares/AppError';
import userRoutes from '../modules/users/routes/user.routes';

const routes = Router();

routes.use(userRoutes);

routes.get('/', (_, response: Response) => {
    // const conn = connection.migrate.status();
    console.log(connection);

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
    throw new AppError('ERRO GERADO PELO APP ERROR', 500);
});

export default routes;
