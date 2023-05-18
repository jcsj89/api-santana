import { Knex } from 'knex';

import { v4 } from 'uuid';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  // await knex('products').del(),
  // Inserts seed entries
  await knex('products').insert([
    {
      id: v4(),
      active: true,
      showInWeb: true,
      description: 'ATIVADO LS',
      detailedProductDescription: 'Este produto que mais vende',
      codeProd: '1',
      codeNCM: '234234234',
      codeEAN: ' 234234234234', // codigo de barras
      price: 110.5, // preco do produto
      priceUnit: 110,
      discountValue: 10, // desconto no preco
      discountPercent: 10, // desconto no preco
      inventory: 440, // estoque do produto
      cost: 50, // estoque do produto
      inventoryCost: 390, // custo do estoque do produto

      density: 1.5, // densidade do produto
      freeWeight: 50, // peso livre
      grossWeight: 50, //peso bruto
      color: ' azul',
      validity: '02 anos', // validade
      brand: ' santana', // marca
      size: '50l',
      producer: ' santana', // fabricante
      embalagem_id: v4(),
    },
    {
      id: v4(),
      active: true,
      showInWeb: true,
      description: 'SANQ CHASSIS LS',
      detailedProductDescription: 'Este produto que mais vende',
      codeProd: '1',
      codeNCM: '234234',
      codeEAN: '234234234SDF45234', // codigo de barras
      price: 110.57, // preco do produto
      priceUnit: 110.57,
      discountValue: 10, // desconto no preco
      discountPercent: 5, // desconto no preco
      inventory: 440, // estoque do produto
      cost: 50.66, // estoque do produto
      inventoryCost: 390, // custo do estoque do produto

      density: 1.5, // densidade do produto
      freeWeight: 50, // peso livre
      grossWeight: 50, //peso bruto
      color: 'azul',
      validity: '02 anos', // validade
      brand: 'santana', // marca
      size: '50l',
      producer: 'santana', // fabricante
      embalagem_id: v4(),
    },
  ]);
}
