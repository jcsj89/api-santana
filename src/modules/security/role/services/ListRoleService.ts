import AppError from '../../../../middleware/AppError';
import knex from '../../../../database/connection';
import Role from '../model/Role';

export default class ListRoleService {
  public async execute(): Promise<Role[]> {
    const roles: Role[] = await knex('roles').select('*');

    if (roles.length < 1) throw new AppError('Roles not found.');

    return roles;
  }
}
