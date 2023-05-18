import { v4 } from 'uuid';

export default class Document {
  static STATUS = { ACTIVE: true, INACTIVE: false, SHOW: true, HIDE: false };
  id: string;
  status: boolean;
  showInWeb: boolean;
  description: string;
  type: string;
  version: string;
  filePath: string;
  productId: string;

  constructor() {
    this.id = v4();
    this.showInWeb = Document.STATUS.HIDE;
    this.status = Document.STATUS.ACTIVE;
    this.description = '';
    this.type = ''; // FISPQ OR ETC
    this.version = '1.0.0';
    this.filePath = '';
    this.productId = '';
  }
}
