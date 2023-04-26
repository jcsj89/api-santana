interface ITags {
  id: string;
  tagName: string;
  productId: string;
}

class Tag {
  id: string;
  tagName: string;
  productId: string;

  constructor({ id, tagName, productId }: ITags) {
    this.id = id;
    this.tagName = tagName;
    this.productId = productId;
  }
}

export default Tag;
