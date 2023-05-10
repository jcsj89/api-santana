import knex from 'knex';
import validator from 'validator';
import AppError from '../../../middlewares/AppError';
import Tag from '../model/Tags';

interface IRequest {
  id: string;
  tagName: string;
  description: string;
}

export default class TagService {
  public async execute({ id, tagName, description }: IRequest): Promise<Tag> {
    // convert to upper case
    tagName = tagName.toLowerCase();

    console.log(tagName, description);
    // Valida o id no formato uuid
    if (!validator.isUUID(id))
      throw new AppError('UpdateTagService:: Id is not valid.');

    // busca a tag com o id
    const hasTag: Tag = await knex('tags').where({ id }).first();

    // valida se encontrou a tag no banco
    if (!hasTag) {
      throw new AppError('TagService:: Tag not exists.');
    }

    //valida o tamanho de tag e description

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

    //   hasTag.tag = tag;
    //   hasTag.action = action;
    //   hasTag.endpoint = endpoint;
    // }

    // // valida o tamanho do description
    // description.length >= 4 ? (hasTag.description = description) : null;
    console.log(hasTag);
    try {
      // atualiza o user depois das validacoes
      // await knex('tags').where({ id: hasTag.id }).update(hasTag);
    } catch (error) {
      console.log(error); // tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Update Tag Service:: Error update knex');
    }

    return Tag.create({
      tagName: 'teste',
      description: 'teste',
    });
  }
}
