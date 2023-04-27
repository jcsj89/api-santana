import { Router } from 'express';
import isAuthenticated from '../../../../middlewares/isAuthenticated';
import isAuthorized from '../../../../middlewares/isAuthorized';
import RoleController from '../controller/RoleController';

const roleController = new RoleController();
const roleRoutes = Router();

roleRoutes.get('/roles', isAuthenticated, isAuthorized, roleController.index);
roleRoutes.post('/roles', isAuthenticated, isAuthorized, roleController.create);
roleRoutes.put(
  '/roles/:id',
  isAuthenticated,
  isAuthorized,
  roleController.update,
);
roleRoutes.delete(
  '/roles/:id',
  isAuthenticated,
  isAuthorized,
  roleController.delete,
);

export default roleRoutes;
