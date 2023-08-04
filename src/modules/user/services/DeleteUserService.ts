import validator from 'validator';
import knex from '../../../database/connection';
import AppError from '../../../middlewares/AppError';
import User from '../model/UserModel';

interface IRequest {
  id: string;
}

interface IResponse {
  message: string;
}

export default class DeleteUserService {
  // Describe the checking logic in order
  /*
    1 - check if the id is a valid UUID form
    2 - check if exists user in database
    3 - delete user in database
  */

  public async execute({ id }: IRequest): Promise<IResponse> {
    // check if UUID is valid
    if (!validator.isUUID(id))
      throw new AppError('Delete User Service:: Id is not valid.');

    const hasUser: User = await knex('users').where({ id }).first();

    if (!hasUser) {
      throw new AppError('User not exists.');
    }

    try {
      await knex('users').where({ id: hasUser.id }).delete();
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('UpdateUserService::error update knex');
    }

    const userDeleted = { message: `User ${hasUser.email} was deleted.` };

    return userDeleted;
  }
}
