import AppError from './AppError.js';

import { verify } from 'jsonwebtoken';
import auth from '../config/auth.js';

export default function isAuthenticated(request, _, next) {
    const authHeader = request.headers.authorization;

    if (!authHeader) throw new AppError('Jwt Token is missing.');

    const [, token] = authHeader.split(' ');

    try {
        const decodedToken = verify(token, auth.JWT.secret);

        const { subject, isAdmin } = decodedToken;

        // request.user = {
        //   id: subject,
        //   isAdmin,
        // };

        return next();
    } catch {
        throw new AppError('Invalid JWT Token');
    }
}
