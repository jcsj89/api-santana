import AppError from '../middleware/AppError';
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import auth from '../config/auth';

interface TokenPayload {
  iat: number;
  exp: number;
  subject: string;
  isAdmin: boolean;
}

export default function isAuthenticated(
  request: Request,
  _: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) throw new AppError('Jwt Token is missing.');

  const [, token] = authHeader.split(' ');

  try {
    const decodedToken = verify(token, auth.JWT.secret);

    const { subject, isAdmin } = decodedToken as TokenPayload;

    request.user = {
      id: subject,
      isAdmin,
    };

    return next();
  } catch {
    throw new AppError('Invalid JWT Token');
  }
}
