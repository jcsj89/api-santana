import { Router } from 'express';
import UserRoleController from '../controller/UserRoleController';
import isAuthenticated from '../../../../middlewares/isAuthenticated';
import isAuthorized from '../../../../middlewares/isAuthorized';

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
