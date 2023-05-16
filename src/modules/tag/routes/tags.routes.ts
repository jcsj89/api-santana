import { Joi, Segments, celebrate } from 'celebrate';
import { Router } from 'express';
import isAuthenticated from '../../../middlewares/isAuthenticated';
import isAuthorized from '../../../middlewares/isAuthorized';
import TagController from '../controller/TagController';

const tagController = new TagController();
const tagRoutes = Router();

tagRoutes.get('/tags', isAuthenticated, isAuthorized, tagController.index);
tagRoutes.post(
  '/tags',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      tagName: Joi.string().min(2).max(64).required(),
      description: Joi.string().min(3).max(1023),
    }),
  }),
  tagController.create,
);

tagRoutes.put(
  '/tags/:id',
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
  tagController.update,
);

tagRoutes.delete(
  '/tags/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string()
        .guid({
          version: ['uuidv4'],
        })
        .required(),
    }),
  }),
  tagController.delete,
);

export default tagRoutes;
