import AppError from '../../../../middleware/AppError';
import knex from '../../../../database/connection';
import UserRole from '../model/UserRole';

export default class ListUserRoleService {
  public async execute(): Promise<UserRole[]> {
    const roles: UserRole[] = await knex('user_role').select('*');

    if (roles.length < 1) throw new AppError('User Roles not found.');

    return roles;
  }
}
