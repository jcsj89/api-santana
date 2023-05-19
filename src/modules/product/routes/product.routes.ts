import { Joi, Segments, celebrate } from 'celebrate';
import { Router } from 'express';
import ProductController from '../controller/ProductController';

const productController = new ProductController();
const productRoutes = Router();

productRoutes.get('/products', productController.list);
productRoutes.delete(
  '/products/:id',
  celebrate({
    [Segments.PARAMS]: Joi.object().keys({
      id: Joi.string()
        .guid({ version: ['uuidv4'] })
        .required(),
    }),
  }),
  productController.delete,
);
productRoutes.post(
  '/products',
  celebrate({
    [Segments.BODY]: Joi.object().keys({
      description: Joi.string().min(2).max(256).required(),
      detailedProductDescription: Joi.string().max(4096).empty(''),
      price: Joi.number().max(99999999),
      priceUnit: Joi.number().max(99999999),
      discountPercent: Joi.number().max(100),
      discountValue: Joi.number().max(999999),
      freeWeight: Joi.number().max(99999),
      grossWeight: Joi.number().max(99999),
      color: Joi.string().max(128).empty(''),
      codeEAN: Joi.string().max(64).empty(''),
      validity: Joi.string().max(256).empty(''),
      brand: Joi.string().max(256).empty(''),
      producer: Joi.string().max(256),
      cost: Joi.number().max(99999999),
      inventory: Joi.number().max(99999999),
      inventoryCost: Joi.number().max(99999999),
      size: Joi.string().max(64).empty(''),
      codeProd: Joi.string().max(64).empty(''),
      codeNCM: Joi.string().max(64).empty(''),
      density: Joi.number(),
      embalagem_id: Joi.string().guid().empty(''),
    }),
  }),
  productController.create,
);
productRoutes.put('/products/:id', productController.update);

export default productRoutes;
