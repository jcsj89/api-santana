import { Router } from 'express';

// routes
import userRoutes from '../modules/user/routes/user.routes';
import sessionRoutes from '../modules/security/session/routes/session.route';
import roleRoutes from '../modules/security/role/routes/role.routes';
import userRoleRoutes from '../modules/security/user-role/routes/userRole.routes';
import productRoutes from '../modules/product/routes/product.routes';
import tagsRoutes from '../modules/tag/routes/tags.routes';

// middleware error
import AppError from '../middlewares/AppError';

const routes = Router();

routes.use(userRoutes); // rotas dos usuarios
routes.use(sessionRoutes); // rota de sessao, login, etc...
routes.use(roleRoutes); // rotas dos roles
routes.use(userRoleRoutes); // rotas da juncao user e roles
routes.use(productRoutes); // rota produto
routes.use(tagsRoutes); // rotas das tags

routes.get('/', (_, response) => {
  response.json({
    project: 'API Santana',
    description:
      'Esta api faz o acesso, permissoes e configuracoes do site Santana',
    message: 'Just do it!',
  });
});

routes.get('/err', (_, __) => {
  throw new AppError('Erro teste');
});

export default routes;
