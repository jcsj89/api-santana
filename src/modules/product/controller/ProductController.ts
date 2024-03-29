import { Request, Response } from 'express';
import CreateProductService from '../services/CreateProductService';
import DeleteProductService from '../services/DeleteProductService';
import ListProductService from '../services/ListProductService';
import UploadProductService from '../services/UploadProductService';

export default class ProductController {
  public async list(request: Request, response: Response) {
    const listProductService = new ListProductService();
    return response.json(await listProductService.execute());
  }

  public async create(request: Request, response: Response) {
    const createProductService = new CreateProductService();

    const {
      description,
      detailedProductDescription,
      price,
      priceUnit,
      freeWeight,
      grossWeight,
      discountPercent,
      discountValue,
      color,
      codeEAN,
      validity,
      brand,
      producer,
      cost,
      inventory,
      inventoryCost,
      size,
      codeProd,
      codeNCM,
      density,
      embalagem_id,
    } = request.body;

    return response.json(
      await createProductService.execute({
        description,
        detailedProductDescription,
        price,
        priceUnit,
        freeWeight,
        grossWeight,
        discountPercent,
        discountValue,
        color,
        codeEAN,
        validity,
        brand,
        producer,
        cost,
        inventory,
        inventoryCost,
        size,
        codeProd,
        codeNCM,
        density,
        embalagem_id,
      }),
    );
  }

  public async update(request: Request, response: Response) {
    return 'update of products';
  }

  public async delete(request: Request, response: Response) {
    const deleteProductService = new DeleteProductService();
    const { id } = request.params;
    return response.json(await deleteProductService.execute({ id }));
  }

  public async uploadImage(request: Request, response: Response) {
    const uploadProductService = new UploadProductService();

    const { id } = request.params;

    const resp = await uploadProductService.execute({
      request,
      response,
      fieldname: 'photo',
      id,
    });

    return resp;
  }

  public async uploadDocument(request: Request, response: Response) {
    const uploadProductService = new UploadProductService();

    const { id } = request.params;

    const resp = await uploadProductService.execute({
      request,
      response,
      fieldname: 'doc',
      id,
    });

    return resp;
  }
}
