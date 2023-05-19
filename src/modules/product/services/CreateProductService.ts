import knex from '../../../database/connection';
import AppError from '../../../middlewares/AppError';
import Product from '../model/ProductModel';

interface IRequest {
  description: string;
  detailedProductDescription: string;
  price: number;
  priceUnit: number;
  freeWeight: number;
  grossWeight: number;
  discountPercent: number;
  discountValue: number;
  color: string;
  codeEAN: string;
  validity: string;
  brand: string;
  producer: string;
  cost: number;
  inventory: number;
  inventoryCost: number;
  size: string;
  codeProd: string;
  codeNCM: string;
  density: number;
  embalagem_id: string;
}

export default class CreateProductService {
  public async execute({
    description,
    detailedProductDescription,
    price,
    priceUnit,
    freeWeight,
    grossWeight,
    discountPercent,
    discountValue,
    color,
    codeEAN,
    validity,
    brand,
    producer,
    cost,
    inventory,
    inventoryCost,
    size,
    codeProd,
    codeNCM,
    density,
    embalagem_id,
  }: IRequest): Promise<Product> {
    // validations
    // convert tags to lower case

    const prod = {
      description,
      detailedProductDescription,
      price,
      priceUnit,
      freeWeight,
      grossWeight,
      discountPercent,
      discountValue,
      color,
      codeEAN,
      validity,
      brand,
      producer,
      cost,
      inventory,
      inventoryCost,
      size,
      codeProd,
      codeNCM,
      density,
      embalagem_id,
    };

    const product = new Product(prod);

    try {
      await knex('products').insert(product);
    } catch (error) {
      console.log(error); //tratar oque fazer com o erro depois, se vai logar ou fazer nada
      throw new AppError('Create Product Service::error insert knex');
    }

    return product;
  }
}
