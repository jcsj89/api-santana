import multer from 'multer';
import { resolve } from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    if (file.fieldname.includes('photo')) {
      cb(null, resolve(__dirname, '..', '..', 'public', 'product', 'images'));
    } else if (file.fieldname.includes('doc')) {
      cb(
        null,
        resolve(__dirname, '..', '..', 'public', 'product', 'documents'),
      );
    } else {
      cb(null, resolve(__dirname, '..', '..', 'public'));
    }
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    const originalExtension = file.originalname.split('.').pop();
    cb(null, file.fieldname + '-' + uniqueSuffix + '.' + originalExtension);
  },
});

export { storage };
