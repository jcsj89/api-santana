import multer from 'multer';
import { storage } from '../config/multer';

function fileFilter(req: any, file: any, cb: any) {
  // The function should call `cb` with a boolean
  // to indicate if the file should be accepted
  // console.log(file);

  if (!file) cb(new Error('Please select a file.'), false);

  if (file.fieldname.includes('doc')) {
    if (!file.originalname.match(/\.(pdf|doc|docx|xls|xlsx|odt)$/)) {
      cb(new Error('Please upload a valid document file'), false);
    } else if (
      file.mimetype !== 'application/pdf' &&
      file.mimetype !== 'application/msword' &&
      file.mimetype !==
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document' &&
      file.mimetype !==
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' &&
      file.mimetype !== 'application/vnd.oasis.opendocument.text'
    ) {
      cb(new Error('Please upload a valid document file'), false);
    } else {
      cb(null, true);
    }
  } else if (file.fieldname.includes('photo')) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|svg)$/)) {
      cb(new Error('Please upload a valid image file'), false);
    } else if (
      file.mimetype !== 'image/jpeg' &&
      file.mimetype !== 'image/png' &&
      file.mimetype !== 'image/jpg' &&
      file.mimetype !== 'image/svg+xml'
    ) {
      cb(new Error('Please upload a valid image file'), false);
    } else {
      cb(null, true);
    }
  }
}

const upload = multer({
  storage: storage,
  limits: { fileSize: 1024 * 1024 * 8, files: 1 },
  fileFilter: fileFilter,
});

export { upload };
