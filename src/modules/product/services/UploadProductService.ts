import { Request, Response } from 'express';
import multer from 'multer';
import { upload } from '../../../middlewares/UploadsMulter';

interface IRequest {
  request: Request;
  response: Response;
  fieldname: string;
  id: string;
}

interface IResponse {
  message: string;
}

export default class UploadProductService {
  public async execute({
    request,
    response,
    fieldname,
    id,
  }: IRequest): Promise<IResponse> {
    const uploadImg = upload.single(fieldname);

    uploadImg(request, response, function (err: any) {
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
        console.log(request.file);
        // console.log(request.files);
        // return response.json({ msg: 'upload ok' });
        // return next();
        return response.json({ msg: 'upload' });
      }
    });

    return { message: 'upload' };
  }
}
