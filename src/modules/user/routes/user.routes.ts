import { Router } from 'express';
import UserController from '../controller/UserController';
import isAuthenticated from '../../../middleware/isAuthenticated';
import isAuthorized from '../../../middleware/isAuthorized';

const userController = new UserController();
const userRoutes = Router();

userRoutes.get('/users', isAuthenticated, isAuthorized, userController.list);
userRoutes.post('/users', userController.create);
userRoutes.put(
  '/users/:id',
  isAuthenticated,
  isAuthorized,
  userController.update,
);
userRoutes.delete('/users/:id', userController.delete);

export default userRoutes;
