import { Router } from 'express';
import isAuthenticated from '../../../middlewares/isAuthenticated';
import isAuthorized from '../../../middlewares/isAuthorized';
import TagController from '../controller/TagController';

const tagController = new TagController();
const tagRoutes = Router();

tagRoutes.get('/tags', isAuthenticated, isAuthorized, tagController.index);
tagRoutes.post('/tags', tagController.create);
tagRoutes.put('/tags/:id', tagController.update);
tagRoutes.delete('/tags/:id', tagController.delete);

export default tagRoutes;
