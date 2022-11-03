import knex from '../../../../database/connection';
import bcrypt from 'bcrypt';
import AppError from '../../../../middleware/AppError';
import User from 'src/modules/user/model/UserModel';
import { sign } from 'jsonwebtoken';
import auth from '../../../../config/auth';

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: User;
  token: string;
}

export default class CreateSessionService {
  public async execute({ email, password }: IRequest): Promise<IResponse> {
    const user: User = await knex
      .from('users')
      .select('*')
      .where({ email: email })
      .first();

    if (!user) throw new AppError('Email or password are incorrects.');

    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) throw new AppError('Email or password are incorrects.');

    const token = sign(
      { subject: user.id, isAdmin: user.isAdmin },
      auth.JWT.secret,
      {
        expiresIn: auth.JWT.expiresIn,
      },
    );

    user.password_hash = '';

    return { user, token };
  }
}
