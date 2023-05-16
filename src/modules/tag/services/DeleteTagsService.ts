import validator from 'validator';
import knex from '../../../database/connection';
import AppError from '../../../middlewares/AppError';
import Tags from '../model/Tags';

interface IRequest {
  id: string;
}

interface IResponse {
  message: string;
}

export default class DeleteTagsService {
  public async execute({ id }: IRequest): Promise<IResponse> {
    // Valida o id no formato uuid
    if (!validator.isUUID(id))
      throw new AppError('Delete Tags Service:: Id is not valid.');

    const hasTags: Tags = await knex('tags').where({ id }).first();

    if (!hasTags) throw new AppError('Tags not exists.');

    try {
      await knex('tags').where({ id: hasTags.id }).delete();
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Delete Tags Service:: error delete knex');
    }

    const message = { message: 'Tags deleted.' };

    return message;
  }
}
