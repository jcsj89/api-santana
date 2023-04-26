import bcrypt from 'bcrypt';
import validator from 'validator';
import knex from '../../../database/connection';
import AppError from '../../../middlewares/AppError';
import User from '../model/UserModel';

interface IRequest {
  id: string;
  name: string;
  email: string;
  password: string;
  isActive: boolean;
  isAdmin?: boolean;
}

// this service can update any user properties alone
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

    const checkEmail = email || email !== undefined;

    // console.log('checkEmail: ', checkEmail);
    // console.log('email: ', email);
    // console.log('email.length: ', email.length);
    // console.log(typeof email === 'string');

    // verifica se o email é valido
    if (typeof email === 'string' && validator.isEmail(email)) {
      // validacao do email, caso encontre o mesmo email em outro usuario

      // check email diferente e ja esta em uso
      if (hasUser.email !== email) {
        const hasEmail: User[] = await knex('users').where({ email });
        if (hasEmail.length !== 0)
          throw new AppError('UpdateUserService:: Email is already in use.');
      }

      hasUser.email = email;
    }

    // password.length < 4 ||  name.length < 4

    // valida o tamanho do password
    // fazer um servico proprio para alteracao da senha e do status admin do usuario
    password.length >= 4
      ? (hasUser.password_hash = await bcrypt.hash(password, 8))
      : null;

    // atribui email e status e name
    isActive === true ? (hasUser.isActive = true) : (hasUser.isActive = false);

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
