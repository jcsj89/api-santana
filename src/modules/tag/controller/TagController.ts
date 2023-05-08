import { Request, Response } from 'express';
import ListTagsService from '../services/ListTagsService';
import CreateTagsService from '../services/CreateTagsService';
import UpdateTagsService from '../services/UpdateTagsService';
import DeleteTagsService from '../services/DeleteTagsService';

export default class TagController {
  // get all Tags
  public async index(request: Request, response: Response): Promise<Response> {
    // role service
    const service = new ListTagsService();

    const roles = await service.execute();

    return response.json(roles);
  }

  public async create(request: Request, response: Response): Promise<Response> {
    const { tagName, object_id, description, object_table_name } = request.body;
    const service = new CreateTagsService();

    const newTags = {
      tagName,
      object_id,
      description,
      object_table_name,
    };

    const inserted = await service.execute(newTags);

    return response.json(inserted);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const service = new UpdateTagsService();
    const { tagName, object_id, description, object_table_name } = request.body;
    const { id } = request.params;

    const newTags = {
      id,
      tagName,
      object_id,
      description,
      object_table_name,
    };

    const roleUpdated = await service.execute(newTags);

    return response.json(roleUpdated);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const service = new DeleteTagsService();
    const { id } = request.params;

    const roleUpdated = await service.execute({ id });

    return response.json(roleUpdated);
  }
}
