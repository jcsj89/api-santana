import { Router } from 'express';

const productRoutes = Router();

productRoutes.get('/products', (req, res) => {
  return res.json({ product: 'get /products - ok' });
});

export default productRoutes;
