import knex from '../../../database/connection';
import User from '../model/UserModel';
import bcrypt from 'bcrypt';
import AppError from '../../../middleware/AppError';
import validator from 'validator';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  isAdmin?: boolean;
}

export default class UpdateUserService {
  public async execute({
    id,
    name,
    email,
    password,
    isActive,
  }: IRequest): Promise<User> {
    // Valida o id no formato uuid
    if (!validator.isUUID(id))
      throw new AppError('UpdateUserService:: Id is not valid.');

    // busca o user com o id
    const hasUser: User = await knex('users').where({ id }).first();

    // valida se encontrou o user no banco
    if (!hasUser) {
      throw new AppError('UpdateUserService:: User not exists.');
    }

    // verifica se o email é valido e o password nao é undefined
    if (!validator.isEmail(email) || password.length < 4 || name.length < 4) {
      throw new AppError(
        'UpdateUserService:: Email or password or name is not valid.',
      );
    }

    // validacao do email, caso encontre o mesmo email em outro usuario
    // mesmo email
    if (hasUser.email === email) hasUser.email = email;

    //email diferente
    if (hasUser.email !== email) {
      const hasEmail: User[] = await knex('users').where({ email });
      if (hasEmail.length !== 0)
        throw new AppError('UpdateUserService:: Email is already in use.');
    }

    // valida o tamanho do password
    // fazer um servico proprio para alteracao da senha e do status admin do usuario
    password.length >= 4
      ? (hasUser.password_hash = await bcrypt.hash(password, 8))
      : null;

    // atribui email e status e name
    isActive === true ? (hasUser.isActive = true) : (hasUser.isActive = false);
    hasUser.email = email;
    hasUser.name = name;

    try {
      //atualiza o user depois das validacoes
      await knex('users').where({ id: hasUser.id }).update(hasUser);
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('UpdateUserService:: Error update knex');
    }

    return hasUser;
  }
}
