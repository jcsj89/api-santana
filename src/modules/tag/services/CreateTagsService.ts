import knex from '../../../database/connection';
import AppError from '../../../middlewares/AppError';
import Tags from '../model/Tags';

interface IRequest {
  tagName: string;
  description?: string;
}

export default class CreateTagsService {
  public async execute({ tagName, description }: IRequest): Promise<Tags> {
    // convert tags to lower case
    tagName = tagName.toUpperCase();

    // find tags with same name
    const tagsByName: Tags[] = await knex
      .from('tags')
      .select('*')
      .where({ tagName: tagName });

    console.log('create tags service::', tagsByName.length);

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
