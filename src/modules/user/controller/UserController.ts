import { Request, Response } from 'express';
import ListUserService from '../services/ListUserService';
import CreateUserService from '../services/CreateUserService';
import UpdateUserService from '../services/UpdateUserService';
import DeleteUserService from '../services/DeleteUserService';

export default class UserController {
  // method that return a users list
  public async list(request: Request, response: Response): Promise<Response> {
    const service = new ListUserService();

    const users = await service.execute();

    return response.json(users);
  }

  //method that create a new user in system
  public async create(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const service = new CreateUserService();

    const user = {
      name,
      email,
      password,
    };

    const inserted = await service.execute(user);

    return response.json(inserted);
  }

  // method that update a user
  public async update(request: Request, response: Response): Promise<Response> {
    const service = new UpdateUserService();
    const { name, email, password, isActive } = request.body;
    const { id } = request.params;

    const user = {
      id,
      name,
      email,
      password,
      isActive,
    };

    const userUpdated = await service.execute(user);

    return response.json(userUpdated);
  }

  // method that delete a user, be careful
  public async delete(request: Request, response: Response): Promise<Response> {
    const service = new DeleteUserService();
    const { id } = request.params;

    const userUpdated = await service.execute({ id });

    return response.json(userUpdated);
  }
}
