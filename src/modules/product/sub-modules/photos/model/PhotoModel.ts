import { v4 } from 'uuid';

interface IPhoto {
  originalName: string;
  mimetype: string;
  size: number;
  fileName: string;
  productId: string;
  path: string;
}

class PhotoModel {
  id: string;
  originalName: string;
  mimetype: string;
  size: number;
  fileName: string;
  productId: string;
  path: string;

  constructor({
    originalName = '',
    mimetype = '',
    size = 0,
    fileName = '',
    productId = '',
    path = '',
  }: IPhoto) {
    this.id = v4();
    this.originalName = originalName;
    this.mimetype = mimetype;
    this.size = size;
    this.fileName = fileName;
    this.productId = productId;
    this.path = path;
  }

  static create({
    originalName,
    mimetype,
    size,
    fileName,
    path,
    productId,
  }: IPhoto) {
    return new PhotoModel({
      originalName,
      mimetype,
      size,
      fileName,
      path,
      productId,
    });
  }
}

export default PhotoModel;
