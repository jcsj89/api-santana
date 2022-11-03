import knex from '../../../../database/connection';
import UserRole from '../model/UserRole';
import AppError from '../../../../middleware/AppError';
import validator from 'validator';
import { v4 } from 'uuid';

interface IRequest {
  user_id: string;
  role_id: string;
}

export default class CreateUserRoleService {
  public async execute({ user_id, role_id }: IRequest): Promise<UserRole> {
    if (!validator.isUUID(user_id) && !validator.isUUID(role_id)) {
      throw new AppError('Create User Role Service:: Params is not valid.');
    }

    let roles: UserRole[] = [];

    try {
      // find if alredy exists role
      roles = await knex
        .from('user_role')
        .select('*')
        .where({ user_id })
        .andWhere({ role_id });
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Create UserRole Service::error select knex');
    }

    if (roles.length !== 0)
      throw new AppError('Create User Role Service:: Item alredy exists.');

    const newUserRole: UserRole = {
      id: v4(),
      user_id,
      role_id,
    };

    try {
      await knex('user_role').insert(newUserRole);
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Create UserRole Service::error insert knex');
    }

    return newUserRole;
  }
}
