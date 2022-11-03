import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcrypt';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  // await knex('users').del();

  // Inserts seed entries
  await knex('users').insert([
    {
      id: uuidv4(),
      name: 'Jose Carlos Sant Anna',
      email: 'jcsj2010@gmail.com',
      password_hash: await hash('1234', 8),
      isActive: true,
      isAdmin: true,
    },
    {
      id: uuidv4(),
      name: 'Fulano de Tal',
      email: 'teste@gmail.com',
      password_hash: await hash('1234', 8),
      isActive: true,
      isAdmin: false,
    },
    {
      id: uuidv4(),
      name: 'Foo Beltrano',
      email: 'foo@gmail.com',
      password_hash: await hash('1234', 8),
      isActive: true,
      isAdmin: false,
    },
    {
      id: uuidv4(),
      name: 'Admin',
      email: 'zesantanna@gmail.com',
      password_hash: await hash('1234', 8),
      isActive: true,
      isAdmin: true,
    },
  ]);
}
