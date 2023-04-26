import AppError from '../../../middlewares/AppError';
import knex from '../../../database/connection';
import Tags from '../model/Tags';

export default class ListRoleService {
  public async execute(): Promise<Tags[]> {
    const roles: Tags[] = await knex('tags').select('*');

    if (roles.length < 1) throw new AppError('Tags not found.');

    return roles;
  }
}
