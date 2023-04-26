import bcrypt from 'bcrypt';
import { sign } from 'jsonwebtoken';
import User from 'src/modules/user/model/UserModel';
import auth from '../../../../config/auth';
import knex from '../../../../database/connection';
import AppError from '../../../../middlewares/AppError';

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

    // if user not found return error
    if (!user) throw new AppError('Email or password are incorrects.');

    // check password
    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) throw new AppError('Email or password are incorrects.');

    // check if user is active.
    if (!user.isActive) throw new AppError('User is not active.');

    // create token
    const token = sign(
      { subject: user.id, isAdmin: user.isAdmin },
      auth.JWT.secret,
      { expiresIn: auth.JWT.expiresIn },
    );

    user.password_hash = '';

    return { user, token };
  }
}
