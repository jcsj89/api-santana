import { Request, Response, Router } from 'express';
import connection from '../database/connection';
import AppError from '../middlewares/AppError';
import userRotas from '../modules/users/routes/userRotas';

const routes = Router();

routes.use(userRotas);

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
    throw new AppError('message');
});

export default routes;
