import { Router } from 'express';
import UserRoleController from '../controller/UserRoleController';
import isAuthenticated from '../../../../middleware/isAuthenticated';
import isAuthorized from '../../../../middleware/isAuthorized';

const userRoleController = new UserRoleController();
const userRoleRoutes = Router();

userRoleRoutes.get('/user-roles', userRoleController.index);
userRoleRoutes.post('/user-roles', userRoleController.create);
userRoleRoutes.put(
  '/user-roles/:id',
  isAuthenticated,
  isAuthorized,
  userRoleController.update,
);
userRoleRoutes.delete('/user-roles/:id', userRoleController.delete);

export default userRoleRoutes;
