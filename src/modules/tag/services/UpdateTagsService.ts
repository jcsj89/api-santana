import validator from 'validator';
import knex from '../../../database/connection';
import AppError from '../../../middlewares/AppError';
import Tag from '../model/Tags';

interface IRequest {
  id: string;
  tagName: string;
  description: string;
}

export default class UpdateTagService {
  public async execute({ id, tagName, description }: IRequest): Promise<Tag> {
    // Valida o id no formato uuid
    if (!validator.isUUID(id))
      throw new AppError('UpdateTagService:: Id is not valid.');

    // busca a tag com o id
    const hasTag: Tag = await knex('tags').where({ id }).first();

    // valida se encontrou a tag no banco
    if (!hasTag) {
      throw new AppError('TagService:: Tag not exists.');
    }

    // valida o tamanho de tag e description
    // validations

    if (
      (tagName && typeof tagName !== 'string') ||
      (description && typeof description !== 'string')
    ) {
      throw new AppError('CREATE TAGS SERVICE:: Tags needs to be string.');
    }

    // check length tagname
    if (tagName && (tagName.length < 2 || tagName.length > 64)) {
      throw new AppError(
        'CREATE TAGS SERVICE:: Tags needs min two and max 64 caracters.',
      );
    }

    // verifica se existe outra tag com mesmo nome e nao deixa alterar
    // pois ficaria duas tags com mesmo nome
    if (tagName) {
      // busca tag com mesmo nome
      const hasTagName: Tag[] = await knex('tags').where({ tagName });
      // check names
      if (hasTagName.length > 0) {
        const tagsWithDiffIds = hasTagName.filter((tag) => tag.id !== id);

        tagsWithDiffIds.forEach((tag) => {
          if (tag.tagName === tagName.toLowerCase())
            throw new AppError(
              'UPDATE TAGS SERVICE:: Tags with same name already exists.',
            );
        });
      }
    }

    // add and convert to lower case
    tagName ? (hasTag.tagName = tagName.toLowerCase()) : null;

    // // valida o tamanho do description
    description && description.length >= 4 && description.length <= 1023
      ? (hasTag.description = description)
      : null;

    console.log(hasTag);

    try {
      // atualiza o user depois das validacoes
      await knex('tags').where({ id: hasTag.id }).update(hasTag);
    } catch (error) {
      console.log(error); // tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Update Tag Service:: Error update knex');
    }

    return hasTag;
  }
}
