import { v4 } from 'uuid';
import knex from '../../../database/connection';
import AppError from '../../../middlewares/AppError';
import Tags from '../model/Tags';

interface IRequest {
  tagName: string;
  description?: string;
  object_id: string;
  object_table_name: string;
}

export default class CreateTagsService {
  public async execute({
    tagName,
    object_id,
    description,
    object_table_name,
  }: IRequest): Promise<Tags> {
    //
    tagName = tagName.toUpperCase(); // convert tags to lower case
    object_id = object_id.toLowerCase(); // convert action to upper case
    object_table_name = object_table_name.toLowerCase();

    // find tags with same name
    const tagsByName: Tags[] = await knex
      .from('tags')
      .select('*')
      .where({ tagName: tagName });

    console.log('create tags service::', tagsByName.length);

    if (tagsByName.length) {
      for (const obj of tagsByName) {
        if (obj.tagName === tagName && obj.object_id === object_id) {
          throw new AppError('CREATE TAGS SERVICE:: Tags alredy exists.');
        }
      }
    }

    // create a tag instance
    const newTag: Tags = Tags.create({
      tagName,
      object_id,
      object_table_name,
      description: description ?? 'description here!',
    });

    // const newTags: Tags = {
    //   id: v4(),
    //   tagName: tagName,
    //   object_id: object_id,
    //   object_table_name: object_table_name,
    //   description: description ?? 'description here!',
    // };

    try {
      await knex('tags').insert(newTag);
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Create Tags Service::error insert knex');
    }

    return newTag;
  }
}
