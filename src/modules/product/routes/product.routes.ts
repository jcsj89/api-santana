import { celebrate } from 'celebrate';
import { Router } from 'express';
import ProductController from '../controller/ProductController';
import deleteProductValidation from '../validation/deleteProductValidation';
import postProductValidation from '../validation/postProductValidation';

const productController = new ProductController();
const productRoutes = Router();

productRoutes.get('/products', productController.list);
productRoutes.delete(
  '/products/:id',
  celebrate(deleteProductValidation()),
  productController.delete,
);
productRoutes.post(
  '/products',
  celebrate(postProductValidation()),
  productController.create,
);

productRoutes.put('/products/:id', productController.update);

export default productRoutes;
