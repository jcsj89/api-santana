import { Knex } from 'knex';
import { v4 as uuidv4 } from 'uuid';
import { hash } from 'bcrypt';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  // await knex('roles').del();

  // Inserts seed entries
  await knex('roles').insert([
    {
      id: uuidv4(),
      role: 'users',
      action: 'GET',
      endpoint: '/users',
      description: 'Lista todos os usuarios.',
    },
    {
      id: uuidv4(),
      role: 'users',
      action: 'POST',
      endpoint: '/users',
      description: 'Cria um novo usuario',
    },
    {
      id: uuidv4(),
      role: 'users',
      action: 'PUT',
      endpoint: '/users/:id',
      description: 'Altera um usuario especifico de acordo com o id',
    },
    {
      id: uuidv4(),
      role: 'users',
      action: 'DELETE',
      endpoint: '/users/:id',
      description: 'Deleta um usuario especifico de acordo com o id.',
    },
  ]);
}
