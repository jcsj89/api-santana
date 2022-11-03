import knex from '../../../../database/connection';
import UserRole from '../model/UserRole';
import AppError from '../../../../middleware/AppError';
import validator from 'validator';

interface IRequest {
  id: string;
}

interface IResponse {
  message: string;
}

export default class DeleteUserRoleService {
  public async execute({ id }: IRequest): Promise<IResponse> {
    // Valida o id no formato uuid
    if (!validator.isUUID(id))
      throw new AppError('Delete User Role Service:: Id is not valid.');

    const hasRole: UserRole = await knex('user_role').where({ id }).first();

    if (!hasRole) throw new AppError('User Role not exists.');

    try {
      await knex('user_role').where({ id: hasRole.id }).delete();
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Delete Role Service::error update knex');
    }

    const message = { message: 'Role deleted.' };

    return message;
  }
}
