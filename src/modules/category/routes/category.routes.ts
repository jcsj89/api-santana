import { Joi, Segments, celebrate } from 'celebrate';
import { Router } from 'express';
import isAuthenticated from '../../../middlewares/isAuthenticated';
import isAuthorized from '../../../middlewares/isAuthorized';
import CategoryController from '../controller/CategoryController';

const categoryController = new CategoryController();
const tagRoutes = Router();

tagRoutes.get(
  '/category',
  isAuthenticated,
  isAuthorized,
  categoryController.index,
);
tagRoutes.post(
  '/category',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      tagName: Joi.string().min(2).max(64).required(),
      description: Joi.string().min(3).max(1023),
    }),
  }),
  categoryController.create,
);

tagRoutes.put(
  '/category/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
    [Segments.BODY]: Joi.object().keys({
      tagName: Joi.string().min(2).max(64),
      description: Joi.string().min(3).max(1023),
    }),
  }),
  categoryController.update,
);

tagRoutes.delete(
  '/category/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),
  categoryController.delete,
);

export default tagRoutes;
