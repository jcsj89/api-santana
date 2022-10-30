import express, { Request, Response, Router } from 'express';

const userRoutes = express.Router();

userRoutes.get('/users', (req: Request, res: Response) => {
    res.json({
        message: 'user router ok',
    });
});

export default userRoutes;
