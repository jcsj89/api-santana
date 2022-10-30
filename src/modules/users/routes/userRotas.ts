import express, { Request, Response, Router } from 'express';
const userRotas = express.Router();

userRotas.get('/user', (req: Request, res: Response) => {
    res.json('ok');
});

export default userRotas;
