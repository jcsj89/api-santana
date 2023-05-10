import knex from '../../../database/connection';
import AppError from '../../../middlewares/AppError';
import { default as Tags } from '../model/Tags';

interface IRequest {
  tagName: string;
  description?: string;
}

export default class CreateTagsService {
  public async execute({ tagName, description }: IRequest): Promise<Tags> {
    // validations
    if (
      typeof tagName !== 'string' ||
      (description && typeof description !== 'string')
    ) {
      throw new AppError('CREATE TAGS SERVICE:: Tags needs to be string.');
    }

    // check length tagname
    if (tagName.length < 2 || tagName.length > 64) {
      throw new AppError(
        'CREATE TAGS SERVICE:: Tags needs min two and max 64 caracters.',
      );
    }

    // convert tags to lower case
    tagName = tagName.toLowerCase();

    // find tags with same name
    const tagsByName: Tags[] = await knex
      .from('tags')
      .select('*')
      .where({ tagName: tagName });

    if (tagsByName.length) {
      for (const obj of tagsByName) {
        if (obj.tagName === tagName) {
          throw new AppError('CREATE TAGS SERVICE:: Tags alredy exists.');
        }
      }
    }

    // create a tag instance
    const newTag: Tags = Tags.create({
      tagName,
      description: description ?? 'description here!',
    });

    try {
      await knex('tags').insert(newTag);
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Create Tags Service::error insert knex');
    }

    return newTag;
  }
}
