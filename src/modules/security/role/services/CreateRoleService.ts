import knex from '../../../../database/connection';
import Role from '../model/Role';
import { v4 } from 'uuid';
import AppError from '../../../../middleware/AppError';

interface IRequest {
  role: string;
  description: string;
  action: string;
  endpoint: string;
}

export default class CreateRoleService {
  public async execute({
    role,
    description,
    action,
    endpoint,
  }: IRequest): Promise<Role> {
    role = role.toLocaleLowerCase(); // convert role to lower case
    action = action.toUpperCase(); // convert action to upper case

    // find role with same name
    const rolesByName: Role[] = await knex
      .from('roles')
      .select('*')
      .where({ role: role });

    console.log('create role service::', rolesByName.length);

    if (rolesByName.length) {
      for (const obj of rolesByName) {
        if (
          obj.role === role &&
          obj.action === action &&
          obj.endpoint === endpoint
        ) {
          throw new AppError('CREATE ROLE SERVICE:: Role alredy exists.');
        }
      }
    }

    const newRole: Role = {
      id: v4(),
      role: role.toLowerCase(),
      action: action.toUpperCase(),
      endpoint,
      description,
    };

    try {
      await knex('roles').insert(newRole);
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Create Role Service::error insert knex');
    }

    return newRole;
  }
}
