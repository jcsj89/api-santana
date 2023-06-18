import { Request, Response } from 'express';
import multer from 'multer';
import knex from '../../../database/connection';
import AppError from '../../../middlewares/AppError';
import { upload } from '../../../middlewares/UploadsMulter';
import PhotoModel from '../sub-modules/photos/model/PhotoModel';

interface IRequest {
  request: Request;
  response: Response;
  fieldname: string;
  id: string;
}

export default class UploadProductService {
  public async execute({ request, response, fieldname, id }: IRequest) {
    const uploadImg = upload.single(fieldname);

    // validate if product exist
    const product = await knex('products').where({ id }).first();

    if (!product)
      return response.status(400).send({ error: 'Produto nao encontrado' });

    // do upload
    uploadImg(request, response, async function (err: any) {
      if (err instanceof multer.MulterError) {
        if (err.code === 'LIMIT_FILE_SIZE')
          return response.status(400).send({ error: err.message });
        // handle unexpected file error
        if (err.code === 'LIMIT_UNEXPECTED_FILE')
          return response.status(400).send({ error: err.message });
        // handle unexpected field key error
        if (err.code === 'LIMIT_FIELD_KEY')
          return response.status(400).send({ error: err.message });

        return response.status(400).send({ error: err.message });
      } else if (err) {
        return response.status(400).send({ error: err.message });
      } else {
        //logica aqui
        if (request.file === undefined || !request.file) {
          return response.status(400).send({ error: 'Nenhum arquivo anexado' });
        }

        // insert photo in db
        if (request.file && fieldname.includes('photo')) {
          const file = {
            originalName: request.file.originalname,
            mimetype: request.file.mimetype,
            size: request.file.size,
            fileName: request.file.filename,
            path: request.file.path,
            productId: id,
          };

          const photo = PhotoModel.create(file);

          try {
            await knex('photos').insert(photo);
            return response.status(200).json({ photo });
          } catch (error) {
            throw new AppError('Erro ao cadastrar foto.');
          }
        }

        // insert document in db
        if (request.file && fieldname.includes('doc')) {
          const file = {
            originalName: request.file.originalname,
            mimetype: request.file.mimetype,
            size: request.file.size,
            fileName: request.file.filename,
            path: request.file.path,
            productId: id,
          };

          const photo = PhotoModel.create(file);

          try {
            await knex('photos').insert(photo);
            return response.status(200).json({ photo });
          } catch (error) {
            throw new AppError('Erro ao cadastrar foto.');
          }
        }
      }
    });

    return { message: 'upload' };
  }
}
