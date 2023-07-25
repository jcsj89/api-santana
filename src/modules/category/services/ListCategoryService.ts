import knex from '../../../database/connection';
import AppError from '../../../middlewares/AppError';
import Tags from '../model/Category';

export default class ListTagsService {
  public async execute(): Promise<Tags[]> {
    const tags: Tags[] = await knex('tags').select('*');

    if (tags.length < 1) throw new AppError('Tags not found.');

    return tags;
  }
}
