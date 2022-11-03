import knex from '../../../database/connection';
import User from '../model/UserModel';

export default class ListUserService {
  public async execute(): Promise<User[]> {
    const users: User[] = await knex('users').select('*');

    //retorna sem password
    for (const user of users) {
      user.password_hash = '';
    }

    return users;
  }
}
