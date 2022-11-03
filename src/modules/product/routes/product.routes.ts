import { Router } from 'express';

const productRoutes = Router();

productRoutes.get('/products', (req, res) => {
    return res.json({prod:'produto ok'})
})

export default productRoutes;
