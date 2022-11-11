interface IProduct {
  id: string;
  active: boolean; // esta ativo?
  name: string;
  description: string;
  codeProd: string;
  codeNCM: string;
  codeEAN: string; // codigo de barras
  price: number; // preco do produto
  discount: number; // desconto no preco
  inventory: number; // estoque do produto
  inventoryCost: number; // estoque do produto
  category: string; // categoria do produto
  density: number; // densidade do produto
  freeWeight: number;
  grossWeight: number;
  color: string;
  validity: string; // validade
  // tags relacionadas ao produto
  tags: string; // tabela
  // embalagens de venda
  embalagem_id: string; // tabela N:1
  brand: string; // marca
  producer: string; // fabricante
  size: string;
  fispq_id: string; // deve permitir salvar fispq ou documentos, ver se pode liberar no site, criar tabela ou url aqui?
  photos: string; // tabela 1:N
}
class Product implements IProduct {
  id: string;
  active: boolean; // esta ativo?
  name: string;
  description: string;
  codeProd: string; // unique
  codeNCM: string;
  codeEAN: string; // codigo de barras
  price: number; // preco do produto
  discount: number; // desconto no preco
  inventory: number; // estoque do produto
  inventoryCost: number; // estoque do produto
  category: string; // categoria do produto - outra tabela
  density: number; // densidade do produto
  freeWeight: number;
  grossWeight: number;
  color: string; // pode ser enum
  validity: string; // validade
  // tags relacionadas ao produto
  tags: string; // tabela externa ou string separada por virgula
  // embalagens de venda
  embalagem_id: string; // tabela N:1
  brand: string; // marca
  producer: string; // fabricante
  size: string;
  fispq_id: string; // deve permitir salvar fispq ou documentos, ver se pode liberar no site, criar tabela ou url aqui?
  photos: string; // tabela 1:N

  constructor() {
    this.active = true;
    this.id = '';
    this.name = '';
    this.price = 0;
    this.description = '';
    this.photos = '';
    this.category = '';
    this.discount = 0;
    this.fispq_id = '';
    this.tags = '';
    this.freeWeight = 0;
    this.grossWeight = 0;
    this.color = '';
    this.embalagem_id = '';
    this.codeEAN = '';
    this.validity = '';
    this.brand = '';
    this.producer = '';
    this.inventory = 0;
    this.inventoryCost = 0;
    this.size = '';
    this.codeProd = '';
    this.codeNCM = '';
    this.density = 0;
  }
}

export default Product;
