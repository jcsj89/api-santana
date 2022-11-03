import { Request, Response } from 'express';
import ListRoleService from '../services/ListRoleService';
import CreateRoleService from '../services/CreateRoleService';
import UpdateRoleService from '../services/UpdateRoleService';
import DeleteRoleService from '../services/DeleteRoleService';

export default class RoleController {
  public async index(request: Request, response: Response): Promise<Response> {
    const service = new ListRoleService();

    const roles = await service.execute();

    return response.json(roles);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { role, action, endpoint, description } = request.body;
    const service = new CreateRoleService();

    const newRole = {
      role,
      description,
      action,
      endpoint,
    };

    const inserted = await service.execute(newRole);

    return response.json(inserted);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const service = new UpdateRoleService();
    const { role, action, endpoint, description } = request.body;
    const { id } = request.params;

    const newRole = {
      id,
      role,
      description,
      action,
      endpoint,
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
