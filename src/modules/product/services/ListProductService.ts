import knex from '../../../database/connection';
import Product from '../model/ProductModel';

export default class ListProductService {
  public async execute() {
    const products: Product[] = await knex('products').select('*');

    if (products.length < 1) {
      return { MESSAGE: 'Product not found.' };
    }

    return products;
  }
}
