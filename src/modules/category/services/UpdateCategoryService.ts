import validator from 'validator';
import knex from '../../../database/connection';
import AppError from '../../../middlewares/AppError';
import Tag from '../model/Category';

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

    // check if exists one param
    if (!tagName && !description) {
      throw new AppError('TagService:: Tag or description needs exists.');
    }

    // set to lower case and trim spaces
    tagName ? (tagName = tagName.toLowerCase().trim()) : null;

    // busca a tag com o id
    const hasTag: Tag = await knex('tags').where({ id }).first();

    // valida se encontrou a tag no banco
    if (!hasTag) {
      throw new AppError('TagService:: Tag not exists.');
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
              'UPDATE TAGS SERVICE:: there is already a tag with the same name.',
            );
        });
      }
    }

    // add and convert to lower case
    tagName ? (hasTag.tagName = tagName) : null;

    // valida o tamanho do description
    description ? (hasTag.description = description) : null;

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
