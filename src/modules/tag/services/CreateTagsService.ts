import knex from '../../../database/connection';
import Tags from '../model/Tags';
import { v4 } from 'uuid';
import AppError from '../../../middleware/AppError';

interface IRequest {
  tagName: string;
  productId: string;
}

export default class CreateTagsService {
  public async execute({ tagName, productId }: IRequest): Promise<Tags> {
    tagName = tagName.toUpperCase(); // convert tags to lower case
    productId = productId.toLowerCase(); // convert action to upper case

    // find tags with same name
    const tagsByName: Tags[] = await knex
      .from('tags')
      .select('*')
      .where({ tagName: tagName });

    console.log('create tags service::', tagsByName.length);

    if (tagsByName.length) {
      for (const obj of tagsByName) {
        if (obj.tagName === tagName && obj.productId === productId) {
          throw new AppError('CREATE TAGS SERVICE:: Tags alredy exists.');
        }
      }
    }

    const newTags: Tags = {
      id: v4(),
      tagName: tagName,
      productId: productId,
    };

    try {
      await knex('tags').insert(newTags);
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Create Tags Service::error insert knex');
    }

    return newTags;
  }
}
