import { NextFunction, Request, Response } from 'express';
import AppError from './AppError';
import knex from '../database/connection';

export default async function (
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const user = request.user;

  if (!user) throw new AppError('User does not exist in the request.');

  if (user && user.isAdmin) {
    console.log('user: ', user);
    console.log('router.path', request.route.path);
    return next();
  }

  const roles = await knex
    .select('roles.action', 'roles.endpoint', 'roles.role')
    .from('roles')
    .innerJoin('user_role', 'roles.id', 'user_role.role_id')
    .innerJoin('users', 'users.id', 'user_role.user_id')
    .where('users.id', '=', user.id);

  const method = request.method;
  const url = request.route.path;

  for (const role of roles) {
    if (role.action === method && role.endpoint === url) {
      console.log('Usuario autorizado');
      console.log('User ID: ', user.id);
      console.log('router.path', request.route.path);
      return next();
    }
  }

  throw new AppError('User not authorized for this action.');
  // next();
}
