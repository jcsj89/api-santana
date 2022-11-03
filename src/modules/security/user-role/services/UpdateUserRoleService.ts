import knex from '../../../../database/connection';
import Role from '../model/UserRole';
import AppError from '../../../../middleware/AppError';
import validator from 'validator';
import UserRole from '../model/UserRole';

interface IRequest {
  id: string;
  user_id: string;
  role_id: string;
}

export default class UpdateUserRoleService {
  public async execute({ id, user_id, role_id }: IRequest): Promise<Role> {
    // Valida o id no formato uuid
    if (!validator.isUUID(id))
      throw new AppError('UpdateRoleService:: Id is not valid.');

    // busca a role com o id
    const hasRole: Role = await knex('user_role').where({ id }).first();

    // valida se encontrou a role no banco
    if (!hasRole) {
      throw new AppError('UpdateRoleService:: Role not exists.');
    }

    //valida o tamanho de role e description
    if (!validator.isUUID(user_id) && !validator.isUUID(role_id)) {
      throw new AppError(
        'Update User Role Service:: role or user id is not valid.',
      );
    }

    let roles: UserRole[] = [];
    try {
      // busca todas as roles com o mesmo nome passado no parametro 'role' e user id
      roles = await knex('user_role')
        .where({ user_id })
        .andWhere({ role_id })
        .andWhere('id', '<>', id);
    } catch (error) {
      console.log(error); // tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Update User Role Service:: Error update knex');
    }

    // nao encontrou outra role com o mesmo nome, entao atribui e altera
    if (roles.length !== 0)
      throw new AppError('Update User Role Service:: Role alredy exists.');

    hasRole.user_id = user_id;
    hasRole.role_id = role_id;

    try {
      // atualiza o user depois das validacoes
      await knex('user_role').where({ id: hasRole.id }).update(hasRole);
    } catch (error) {
      console.log(error); // tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Update User Role Service:: Error update knex');
    }

    return hasRole;
  }
}
