import { celebrate } from 'celebrate';
import { Router } from 'express';
import ProductController from '../controller/ProductController';
import createProductValidation from '../validation/createProductValidation';
import deleteProductValidation from '../validation/deleteProductValidation';
import updateProductValidation from '../validation/uploadProductValidation';

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
  celebrate(createProductValidation()),
  productController.create,
);

// update a products
productRoutes.put('/products/:id', productController.update);

// upload a products
productRoutes.post(
  '/products/upload/img/:id',
  celebrate(updateProductValidation()),
  productController.uploadImage,
);
productRoutes.post(
  '/products/upload/doc/:id',
  celebrate(updateProductValidation()),
  productController.uploadDocument,
);

export default productRoutes;
