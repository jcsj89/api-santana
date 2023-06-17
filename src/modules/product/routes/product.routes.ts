import { celebrate } from 'celebrate';
import { Router } from 'express';
import ProductController from '../controller/ProductController';
import deleteProductValidation from '../validation/deleteProductValidation';
import postProductValidation from '../validation/postProductValidation';

const productController = new ProductController();
const productRoutes = Router();

// list products
productRoutes.get('/products', productController.list);

// list one product by id
productRoutes.get('/products/:id', productController.list);

// delete one products
productRoutes.delete(
  '/products/:id',
  celebrate(deleteProductValidation()),
  productController.delete,
);

// create a product
productRoutes.post(
  '/products',
  celebrate(postProductValidation()),
  productController.create,
);

// update a products
productRoutes.put('/products/:id', productController.update);

// upload a products
productRoutes.post('/products/upload/:id', productController.uploadImage);

export default productRoutes;
