import { v4 } from 'uuid';

interface IDoc {
  status?: boolean;
  showInWeb?: boolean;
  description?: string;
  type?: string;
  version?: string;
  path: string;
  originalName: string;
  fileName: string;
  mimetype: string;
  size: number;
  productId: string;
}
export default class DocumentModel {
  static STATUS = { ACTIVE: true, INACTIVE: false, SHOW: true, HIDE: false };
  id: string;
  status: boolean;
  showInWeb: boolean;
  description: string;
  type: string;
  version: string;
  path: string;
  originalName: string;
  fileName: string;
  mimetype: string;
  size: number;
  productId: string;

  private constructor() {
    this.id = v4();
    this.showInWeb = DocumentModel.STATUS.HIDE;
    this.status = DocumentModel.STATUS.ACTIVE;
    this.description = '';
    this.type = ''; // FISPQ OR ETC
    this.version = '1.0.0';
    this.path = '';
    this.productId = '';
    this.originalName = '';
    this.fileName = '';
    this.mimetype = '';
    this.size = 0;
  }

  // create a new Document Object
  static create({
    description = '',
    type = '',
    version = '1.0.0',
    path,
    originalName,
    fileName,
    mimetype,
    size,
    productId,
  }: IDoc) {
    const document = new DocumentModel();

    document.description = description;
    document.type = type;
    document.path = path;
    document.originalName = originalName;
    document.fileName = fileName;
    document.mimetype = mimetype;
    document.size = size;
    document.productId = productId;
    document.version = version;

    return document;
  }
}
