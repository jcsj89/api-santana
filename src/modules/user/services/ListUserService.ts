import knex from '../../../database/connection';
import User from '../model/UserModel';

export default class ListUserService {
  // Describe the checking logic in order
  /*
    1 - remove passwords from users list and return list
    2 - in the routes we need check the authentication
  */

  public async execute(): Promise<User[]> {
    const users: User[] = await knex('users').select('*');

    //retorna sem password
    for (const user of users) {
      user.password_hash = '';
    }

    return users;
  }
}
