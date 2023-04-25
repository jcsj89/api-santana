import bcrypt from 'bcrypt';
// import { v4 } from 'uuid';
import knex from '../../../database/connection';
import AppError from '../../../middleware/AppError';
import User from '../model/UserModel';

interface IRequest {
  name: string;
  email: string;
  password: string;
}

export default class CreateUserService {
  public async execute({ name, email, password }: IRequest): Promise<User> {
    const hasUser: User[] = await knex
      .from('users')
      .select('*')
      .where({ email: email });

    if (hasUser.length) {
      throw new AppError('User alredy exists.');
    }

    const password_hash = await bcrypt.hash(password, 8);

    // const user2: User = {
    //   id: v4(),
    //   name,
    //   email,
    //   password_hash,
    //   isActive: true,
    //   isAdmin: false,
    // };

    const user: User = new User({ name, email, password_hash });

    try {
      await knex('users').insert(user);
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('CreateUserService::error insert knex');
    }

    // retorno sem password
    user.password_hash = '';

    return user;
  }
}
