import knex from '../../../../database/connection';
import Role from '../model/Role';
import AppError from '../../../../middleware/AppError';
import validator from 'validator';

interface IRequest {
  id: string;
  role: string;
  description: string;
  action: string;
  endpoint: string;
}

export default class UpdateRoleService {
  public async execute({
    id,
    role,
    description,
    action,
    endpoint,
  }: IRequest): Promise<Role> {
    // convert to upper case
    role = role.toLowerCase(); // users, roles, pages, etc...
    action = action.toUpperCase(); // GET, POST, PUT, DELETE, etc...

    // Valida o id no formato uuid
    if (!validator.isUUID(id))
      throw new AppError('UpdateRoleService:: Id is not valid.');

    // busca a role com o id
    const hasRole: Role = await knex('roles').where({ id }).first();

    // valida se encontrou a role no banco
    if (!hasRole) {
      throw new AppError('UpdateRoleService:: Role not exists.');
    }
    console.log(action, endpoint);
    //valida o tamanho de role e description
    if (
      role.length < 4 ||
      description.length < 4 ||
      action.length < 3 ||
      endpoint.length < 4
    ) {
      throw new AppError(
        'Update Role Service:: role or description or action or endpoint is not valid.',
      );
    }

    // busca todas as roles com o mesmo nome passado no parametro 'role'
    const roles: Role[] = await knex('roles').where({ role });

    // nao encontrou outra role com o mesmo nome, entao atribui e altera
    if (roles.length === 0) hasRole.role = role;

    if (roles.length !== 0) {
      // action igual e endpoint igual, para nao ter duplicidade
      for (const item of roles) {
        if (
          item.action === action &&
          item.endpoint === endpoint &&
          item.id !== id
        ) {
          console.log(item);
          throw new AppError('Update Role Service:: Role alredy exists.');
        }
      }

      hasRole.role = role;
      hasRole.action = action;
      hasRole.endpoint = endpoint;
    }

    // valida o tamanho do description
    description.length >= 4 ? (hasRole.description = description) : null;

    try {
      // atualiza o user depois das validacoes
      await knex('roles').where({ id: hasRole.id }).update(hasRole);
    } catch (error) {
      console.log(error); // tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Update Role Service:: Error update knex');
    }

    return hasRole;
  }
}
