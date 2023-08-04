import validator from 'validator';
import knex from '../../../database/connection';
import AppError from '../../../middlewares/AppError';
import Product from '../model/ProductModel';

interface IRequest {
  id: string;
}

interface IResponse {
  message: string;
}

export default class DeleteProductService {
  public async execute({ id }: IRequest): Promise<IResponse> {
    // Valida o id no formato uuid
    if (!validator.isUUID(id))
      throw new AppError('Delete Product Service:: Id is not valid.');

    const hasProduct: Product = await knex('products').where({ id }).first();

    if (!hasProduct) {
      throw new AppError('Product not exists.');
    }

    try {
      await knex('products').where({ id: hasProduct.id }).delete();
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('UpdateProductService::error update knex');
    }

    return { message: `Product [${hasProduct.description}] was deleted.` };
  }
}
