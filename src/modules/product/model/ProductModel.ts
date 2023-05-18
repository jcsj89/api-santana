import { v4 } from 'uuid';

// interface
interface IProduct {
  id?: string;
  active?: boolean; // esta ativo?
  showInWeb?: boolean;
  description: string; // nome do produto
  detailedProductDescription: string;
  codeProd: string;
  codeNCM: string;
  codeEAN: string; // codigo de barras
  price: number; // preco do produto
  priceUnit: number;
  discountValue: number; // desconto no preco
  discountPercent: number; // desconto no preco
  inventory: number; // estoque do produto
  cost: number; // estoque do produto
  inventoryCost: number; // custo do estoque do produto
  category?: string[]; // categoria do produto
  density: number; // densidade do produto
  freeWeight: number; // peso livre
  grossWeight: number; //peso bruto
  color: string;
  validity: string; // validade
  brand: string; // marca
  size: string;
  producer: string; // fabricante
  //
  // relacionamentos
  //
  embalagem_id?: string; // tabela N:1 embalagens de venda
  //
  tags?: string[]; // N:N tabela tags relacionadas ao produto
  documents?: string[]; // deve permitir salvar documents ou documentos, ver se pode liberar no site, criar tabela ou url aqui?
  photos?: string[]; // tabela 1:N
}

/*    INFORMACOES SOBRE O PRODUTO
  - Produto pode ser produto acabado, materia-prima
  - ou qualquer outro produto, ou seja, produto e generico
  cada produto tem sua litragem para facilicitar um dia se tornar e-comerce
  ex: ATIVADO 140 - 5 litros
  ex: ATIVADO 140 - 200 litros
  separando os produtos por embalagem
*/

class Product {
  static STATUS = { ACTIVE: true, INACTIVE: false, SHOW: true, HIDE: false };
  id: string;
  active: boolean; // esta ativo ?
  showInWeb: boolean; // mostra no site, default is false ?
  description: string;
  detailedProductDescription: string;
  codeProd: string; // unique
  codeNCM: string;
  codeEAN: string; // codigo de barras
  color: string; //
  validity: string; // validade
  size: string;
  price: number; // preco do produto
  priceUnit: number; //
  discountValue: number; // desconto no preco
  discountPercent: number; // desconto no preco
  cost: number; // custo do produto - necessario realizar calculo pela formula
  inventory: number; // qtd estoque do produto
  inventoryCost: number; // custo do estoque de produto
  density: number; // densidade do produto
  freeWeight: number; // peso liquido
  grossWeight: number; // peso bruto
  // FUTURE RELS
  brand: string; // marca
  producer: string; // fabricante
  // RELATIONSHIPS
  // tags relacionadas ao produto
  embalagem_id: string; // tabela N:1 embalagens de venda
  //
  category?: string[]; // N:N - categoria do produto - outra tabela
  tags?: string[]; // N:N - tabela externa ou string separada por virgula
  documents?: string[]; // 1:N na tabela documents deve ter o id do produto
  //deve permitir salvar documents ou documentos, ver se pode liberar no site, criar tabela ou url aqui?
  photos?: string[]; // tabela 1:N

  constructor({
    discountPercent = 0,
    discountValue = 0,
    price = 0,
    priceUnit = 0,
    description,
    detailedProductDescription,
    freeWeight = 0,
    grossWeight = 0,
    color,
    embalagem_id,
    codeEAN,
    validity,
    brand,
    producer,
    cost = 0,
    inventory = 0,
    inventoryCost = 0,
    size,
    codeProd,
    codeNCM,
    density = 0,
    category = [],
    tags,
    documents,
    photos,
  }: IProduct) {
    this.id = v4();
    this.active = Product.STATUS.ACTIVE;
    this.showInWeb = Product.STATUS.HIDE;
    this.discountPercent = discountPercent;
    this.discountValue = discountValue;
    this.price = price;
    this.priceUnit = priceUnit;
    this.description = description;
    this.detailedProductDescription = detailedProductDescription;
    this.category = category;
    this.freeWeight = freeWeight;
    this.grossWeight = grossWeight;
    this.color = color;
    this.embalagem_id = embalagem_id || '';
    this.codeEAN = codeEAN;
    this.validity = validity;
    this.brand = brand;
    this.producer = producer;
    this.cost = cost;
    this.inventory = inventory;
    this.inventoryCost = inventoryCost;
    this.size = size;
    this.codeProd = codeProd;
    this.codeNCM = codeNCM;
    this.density = density;
    this.tags = tags || [];
    this.documents = documents || [];
    this.photos = photos || [];
  }

  static create({
    discountPercent,
    discountValue,
    price,
    priceUnit,
    description,
    detailedProductDescription,
    category,
    freeWeight,
    grossWeight,
    color,
    embalagem_id,
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
    tags,
    documents,
    photos,
  }: IProduct) {
    return new Product({
      discountPercent,
      discountValue,
      price,
      priceUnit,
      description,
      detailedProductDescription,
      category,
      freeWeight,
      grossWeight,
      color,
      embalagem_id,
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
      tags,
      documents,
      photos,
    });
  }
}

export default Product;
