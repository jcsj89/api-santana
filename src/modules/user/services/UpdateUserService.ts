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
// email
// name needed length > 4
// password length > 4
export default class UpdateUserService {
  // Describe the checking logic in order
  /*
    1 - check if the UUId is valid
    2 - check if the user exists in database
    3 - check if the email is in correct format
    4 - check if the email already in use by another user
    5 - do validations in name, status and password
      obs : in future I need change way how the user can change his password, maybe I need create a new dedicated service
  */

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

    // faz verificacoes sobre o email - valido - exists - etc
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

    // faz verificacoes sobre o nome - maior que 0 e menor que 256 caracteres
    typeof name === 'string' && name.length > 0 && name.length < 256
      ? (hasUser.name = name)
      : null;

    // valida o tamanho do password
    // password.length < 4 ||  name.length < 4
    // fazer um servico proprio para alteracao da senha e do status admin do usuario
    typeof password === 'string' && password.length >= 4
      ? (hasUser.password_hash = await bcrypt.hash(password, 8))
      : null;

    // check and change user status active or not
    typeof isActive === 'boolean'
      ? isActive === true
        ? (hasUser.isActive = true)
        : (hasUser.isActive = false)
      : null;

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
