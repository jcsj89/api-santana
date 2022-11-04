import { Request, Response } from 'express';
import ListProductService from '../services/ListProductService';

export default class ProductController {
  public async list(request: Request, response: Response) {
    const listProductService = new ListProductService();
    console.log(await listProductService.execute());
    return response.json(await listProductService.execute());
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
