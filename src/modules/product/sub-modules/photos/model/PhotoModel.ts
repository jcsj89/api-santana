import { v4 } from 'uuid';

interface IPhoto {
  status?: boolean;
  showInWeb?: boolean;
  originalName: string;
  mimetype: string;
  size: number;
  fileName: string;
  productId: string;
  path: string;
}

class PhotoModel {
  static STATUS = { ACTIVE: true, INACTIVE: false, SHOW: true, HIDE: false };
  id: string;
  status: boolean;
  showInWeb: boolean;
  originalName: string;
  mimetype: string;
  size: number;
  fileName: string;
  productId: string;
  path: string;

  private constructor() {
    this.id = v4();
    this.status = PhotoModel.STATUS.ACTIVE;
    this.showInWeb = PhotoModel.STATUS.SHOW;
    this.originalName = '';
    this.mimetype = '';
    this.size = 0;
    this.fileName = '';
    this.productId = '';
    this.path = '';
  }

  // create a new Photo Object
  static create({
    originalName,
    mimetype,
    size = 0,
    fileName,
    path,
    productId,
  }: IPhoto) {
    const photo = new PhotoModel();

    photo.originalName = originalName;
    photo.mimetype = mimetype;
    photo.size = size;
    photo.fileName = fileName;
    photo.path = path;
    photo.productId = productId;

    return photo;
  }
}

export default PhotoModel;
