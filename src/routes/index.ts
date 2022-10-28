import { Router } from 'express';
import userRoutes from '../modules/users/routes/user.routes.js';

const routes = Router();

routes.use(userRoutes);

routes.get('/', (_, response) => {
    response.json({
        project: 'API Santana',
        description:
            'Esta api faz o acesso, permissoes e configuracoes do site da Santana Quimica',
        message: 'Just do it!',
    });
});

export default routes;
