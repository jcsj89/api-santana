import { Request, Response } from 'express';

export default class ProductController {
  public async list(request: Request, response: Response) {
    return 'list of products';
  }

  public async create(request: Request, response: Response) {
    return 'create a products';
  }

  public async update(request: Request, response: Response) {
    return 'update of products';
  }

  public async delete(request: Request, response: Response) {
    return 'delete of products';
  }
}
