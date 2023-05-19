import knex from '../../../../database/connection';
import Role from '../model/Role';
import validator from 'validator';
import AppError from '../../../../middlewares/AppError';

interface IRequest {
  id: string;
}

interface IResponse {
  message: string;
}

export default class DeleteRoleService {
  public async execute({ id }: IRequest): Promise<IResponse> {
    // Valida o id no formato uuid
    if (!validator.isUUID(id))
      throw new AppError('Delete Role Service:: Id is not valid.');

    const hasRole: Role = await knex('roles').where({ id }).first();

    if (!hasRole) throw new AppError('Role not exists.');

    try {
      await knex('roles').where({ id: hasRole.id }).delete();
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Delete Role Service::error update knex');
    }

    const message = { message: 'Role deleted.' };

    return message;
  }
}
