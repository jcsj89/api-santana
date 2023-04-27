import { NextFunction, Request, Response } from 'express';
import knex from '../database/connection';
import AppError from './AppError';

export default async function (
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const user = request.user;

  if (!user) throw new AppError('User does not exist in the request.');

  // check if user is admin, he has full access
  if (user && user.isAdmin) {
    console.log('user: ', user);
    console.log('Usuario admin ');
    console.log('router.path', request.route.path);
    console.log('USER IS ADMIN - FULL ACCESS');
    return next();
  }

  const roles = await knex
    .select('roles.action', 'roles.endpoint', 'roles.role')
    .from('roles')
    .innerJoin('user_role', 'roles.id', 'user_role.role_id')
    .innerJoin('users', 'users.id', 'user_role.user_id')
    .where('users.id', '=', user.id);

  // check whitch roles is owner user
  const method = request.method;
  const url = request.route.path;
  console.log('roles: ', roles);
  console.log('method: ', method);
  console.log('url: ', url);

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
