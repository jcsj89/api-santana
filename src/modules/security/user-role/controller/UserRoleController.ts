import { Request, Response } from 'express';
import ListUserRoleService from '../services/ListUserRoleService';
import CreateUserRoleService from '../services/CreateUserRoleService';
import UpdateRoleService from '../services/UpdateUserRoleService';
import DeleteRoleService from '../services/DeleteUserRoleService';

export default class UserRoleController {
  public async index(request: Request, response: Response): Promise<Response> {
    const service = new ListUserRoleService();

    const userRoles = await service.execute();

    return response.json(userRoles);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { user_id, role_id } = request.body;
    const service = new CreateUserRoleService();

    const newUserRole = {
      user_id,
      role_id,
    };

    const inserted = await service.execute(newUserRole);

    return response.json(inserted);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const service = new UpdateRoleService();
    const { user_id, role_id } = request.body;
    const { id } = request.params;

    const newRole = {
      id,
      user_id,
      role_id,
    };

    const roleUpdated = await service.execute(newRole);

    return response.json(roleUpdated);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const service = new DeleteRoleService();
    const { id } = request.params;

    const roleUpdated = await service.execute({ id });

    return response.json(roleUpdated);
  }
}
