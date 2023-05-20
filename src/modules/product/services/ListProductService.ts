import knex from '../../../database/connection';
import Product from '../model/ProductModel';

export default class ListProductService {
  public async execute() {
    const products: Product[] = await knex('products')
      .select('*')
      .orderBy('updated_at', 'desc');

    if (products.length < 1) {
      return { MESSAGE: 'Product not found.' };
    }

    const productsActives = products.filter((prod) => prod.active);

    return productsActives;
  }
}
