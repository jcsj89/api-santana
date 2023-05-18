import { v4 } from 'uuid';

// interface
interface IProduct {
  id: string;
  active: boolean; // esta ativo?
  showInWeb: boolean;
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
  category: string; // categoria do produto
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
  tags: string[]; // tabela tags relacionadas ao produto
  // embalagens de venda
  embalagem_id: string; // tabela N:1
  documents: string[]; // deve permitir salvar documents ou documentos, ver se pode liberar no site, criar tabela ou url aqui?
  photos: string[]; // tabela 1:N
}

/*    INFORMACOES SOBRE O PRODUTO
  - Produto pode ser produto acabado, materia-prima
  - ou qualquer outro produto, ou seja, produto e generico
  cada produto tem sua litragem para facilicitar um dia se tornar e-comerce
  ex: ATIVADO 140 - 5 litros
  ex: ATIVADO 140 - 200 litros
  separando os produtos por embalagem
*/

class Product implements IProduct {
  static STATUS = { ACTIVE: true, INACTIVE: false, SHOW: true, HIDE: false };
  id: string;
  active: boolean; // esta ativo ?
  showInWeb: boolean; // mostra no site, default is false ?
  description: string;
  detailedProductDescription: string;
  codeProd: string; // unique
  codeNCM: string;
  codeEAN: string; // codigo de barras
  color: string; // pode ser enum
  validity: string; // validade
  size: string;
  price: number; // preco do produto
  priceUnit: number;
  discountValue: number; // desconto no preco
  discountPercent: number; // desconto no preco
  cost: number; // estoque do produto
  inventory: number; // estoque do produto
  inventoryCost: number; // estoque do produto
  density: number; // densidade do produto
  freeWeight: number;
  grossWeight: number;
  // FUTURE RELS
  brand: string; // marca
  producer: string; // fabricante
  supplier: string; // fornecedor

  // RELATIONSHIPS
  // tags relacionadas ao produto
  tags: string[]; // N:N - tabela externa ou string separada por virgula
  category: string; // N:N - categoria do produto - outra tabela
  // embalagens de venda
  embalagem_id: string; // tabela N:1
  documents: string[]; // 1:N na tabela documents deve ter o id do produto
  //deve permitir salvar documents ou documentos, ver se pode liberar no site, criar tabela ou url aqui?
  photos: string[]; // tabela 1:N

  constructor() {
    this.id = v4();
    this.active = Product.STATUS.ACTIVE;
    this.showInWeb = Product.STATUS.HIDE;
    this.discountPercent = 0;
    this.discountValue = 0;
    this.price = 0;
    this.priceUnit = 0;
    this.description = '';
    this.detailedProductDescription = '';
    this.category = '';
    this.freeWeight = 0;
    this.grossWeight = 0;
    this.color = '';
    this.embalagem_id = '';
    this.codeEAN = '';
    this.validity = '';
    this.brand = '';
    this.producer = '';
    this.supplier = '';
    this.cost = 0;
    this.inventory = 0;
    this.inventoryCost = 0;
    this.size = '';
    this.codeProd = '';
    this.codeNCM = '';
    this.density = 0;
    this.tags = [];
    this.documents = [];
    this.photos = [];
  }
}

export default Product;
