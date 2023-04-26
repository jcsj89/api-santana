import { Router } from 'express';
import RoleController from '../controller/RoleController';
import isAuthenticated from '../../../../middlewares/isAuthenticated';
import isAuthorized from '../../../../middlewares/isAuthorized';

const roleController = new RoleController();
const roleRoutes = Router();

roleRoutes.get('/roles', isAuthenticated, isAuthorized, roleController.index);
roleRoutes.post('/roles', roleController.create);
roleRoutes.put(
  '/roles/:id',
  isAuthenticated,
  isAuthorized,
  roleController.update,
);
roleRoutes.delete('/roles/:id', roleController.delete);

export default roleRoutes;
