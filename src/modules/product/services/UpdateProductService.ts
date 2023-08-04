import knex from '../../../database/connection';
import Product from '../model/ProductModel';

interface IRequest {
  id: string;
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

export default class UpdateProductService {
  public async execute({
    id,
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
  }: IRequest) {
    const products: Product = await knex('products').where({ id }).first();

    return products;
  }
}
