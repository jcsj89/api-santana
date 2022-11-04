class Product {
  id: string;
  name: string;
  price: number; // preco do produto
  description: string;
  photos: string; // deve permitir salvar varias fotos
  category: string; // categoria do produto
  discount: number; // desconto no preco
  fispq: string; // deve permitir salvar fispq ou documentos, ver se pode liberar no site
  active: boolean; // esta ativo?
  tags: string; // tags relacionadas ao produto, usado para buscas
  peso: number;
  cor: string;
  embalagens: string; // embalagens de venda
  ean: string; // codigo de barras
  validade: string;
  marca: string;
  fabricante: string;
  estoque: number; // estoque do produto
  tamanho: string;

  constructor() {
    this.active = true;
    this.id = '';
    this.name = '';
    this.price = 0;
    this.description = '';
    this.photos = '';
    this.category = '';
    this.discount = 0;
    this.fispq = '';
    this.tags = '';
    this.peso = 0;
    this.cor = '';
    this.embalagens = '';
    this.ean = '';
    this.validade = '';
    this.marca = '';
    this.fabricante = '';
    this.estoque = 0;
    this.tamanho = '';
  }
}

export default Product;
