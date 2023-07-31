import { Request, Response } from 'express';
import CreateCategoryService from '../services/CreateCategoryService';
import DeleteCategoryService from '../services/DeleteCategoryService';
import ListCategoryService from '../services/ListCategoryService';
import UpdateCategoryService from '../services/UpdateCategoryService';

export default class CategoryController {
  // get all Category
  public async index(request: Request, response: Response): Promise<Response> {
    // tags service
    const service = new ListCategoryService();

    const tags = await service.execute();

    return response.json(tags);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { tagName, description } = request.body;
    const service = new CreateCategoryService();

    const tag = {
      tagName,
      description,
    };

    const inserted = await service.execute(tag);

    return response.json(inserted);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const service = new UpdateCategoryService();
    const { tagName, description } = request.body;
    const { id } = request.params;

    const tag = {
      id,
      tagName,
      description,
    };

    const tagsUpdated = await service.execute(tag);

    return response.json(tagsUpdated);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const service = new DeleteCategoryService();
    const { id } = request.params;

    const tagUpdated = await service.execute({ id });

    return response.json(tagUpdated);
  }
}
