import { Router } from 'express';

const userRoutes = Router();

userRoutes.get('/users', (req, res) => {
    res.json({
        message: 'user router ok',
    });
});

export default userRoutes;
