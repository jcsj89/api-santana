import { Router } from 'express';
import ProductController from '../controller/ProductController';

const productController = new ProductController();
const productRoutes = Router();

productRoutes.get('/products', productController.list);
productRoutes.delete('/products/:id', productController.delete);
productRoutes.post('/products', productController.create);
productRoutes.put('/products/:id', productController.update);

export default productRoutes;
