import { Router } from 'express';
import ProductController from '../controller/ProductController';

const productController = new ProductController();
const productRoutes = Router();

productRoutes.get('/products', productController.list);

export default productRoutes;
