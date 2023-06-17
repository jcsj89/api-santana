import { Router } from 'express';
// routes
import productRoutes from '../modules/product/routes/product.routes';
import roleRoutes from '../modules/security/role/routes/role.routes';
import sessionRoutes from '../modules/security/session/routes/session.route';
import userRoleRoutes from '../modules/security/user-role/routes/userRole.routes';
import tagsRoutes from '../modules/tag/routes/tags.routes';
import userRoutes from '../modules/user/routes/user.routes';

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
      'Esta api faz o acesso, permissoes, configuracoes e cadastro dos produtos e tudo relacionado do site Santana',
    message: 'Just do it!',
    endPoints: {
      Users: {
        POST: ['/users', 'Cadastra um usuario no sistema.'],
        GET: ['/users', 'Lista todos os usuarios do sistema.'],
        PUT: ['/users/{id}', 'Atualiza os dados de um usuario no sistema.'],
        DELETE: ['/users/{id}', 'Deleta um usuario no sistema.'],
      },
    },
  });
});

// err teste
routes.get('/err', (_, __) => {
  throw new AppError('Erro teste');
});

export default routes;
