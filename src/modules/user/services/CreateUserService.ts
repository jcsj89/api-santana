import bcrypt from 'bcrypt';
// import { v4 } from 'uuid';
import knex from '../../../database/connection';
import AppError from '../../../middlewares/AppError';
import User from '../model/UserModel';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  // Describe the checking logic in order
  /*
    1 - check if has any user in database using the same email
    2 - do password encryptation
    3 - create a User object with all datas
    4 - save it in database and return without password
  */

  public async execute({ name, email, password }: IRequest): Promise<User> {
    // check if has any user in database using the same email
    const hasUser: User[] = await knex
      .from('users')
      .select('*')
      .where({ email: email });

    // if alredy exists a user this return a error like a notice
    if (hasUser.length) {
      throw new AppError('User alredy exists.');
    }

    // here is point that we encrypt the user password
    const password_hash = await bcrypt.hash(password, 8);

    // here is creating a new user, but in future I will change to use create method
    const user: User = new User({ name, email, password_hash });

    try {
      await knex('users').insert(user);
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('CreateUserService::error insert knex');
    }

    // return blank password
    user.password_hash = '';

    return user;
  }
}
