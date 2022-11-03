import { Router } from 'express';
import SessionController from '../controller/SessionController';

const sessionController = new SessionController();
const sessionRoutes = Router();

sessionRoutes.post('/user/login', sessionController.index);

export default sessionRoutes;
