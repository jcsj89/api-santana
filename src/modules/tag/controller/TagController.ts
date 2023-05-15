import { Request, Response } from 'express';
import CreateTagsService from '../services/CreateTagsService';
import DeleteTagsService from '../services/DeleteTagsService';
import ListTagsService from '../services/ListTagsService';
import UpdateTagsService from '../services/UpdateTagsService';

export default class TagController {
  // get all Tags
  public async index(request: Request, response: Response): Promise<Response> {
    // tags service
    const service = new ListTagsService();

    const tags = await service.execute();

    return response.json(tags);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { tagName, description } = request.body;
    const service = new CreateTagsService();

    const tag = {
      tagName,
      description,
    };

    const inserted = await service.execute(tag);

    return response.json(inserted);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const service = new UpdateTagsService();
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
    const service = new DeleteTagsService();
    const { id } = request.params;

    const tagUpdated = await service.execute({ id });

    return response.json(tagUpdated);
  }
}
