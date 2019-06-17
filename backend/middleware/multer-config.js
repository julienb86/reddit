const multer = require('multer');
const MIME_TYPES = {
    'image/jpg' : 'jpg',
    'image/jpeg': 'jpg',
    'image/png': 'png'
};



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'images');
    },
    filename: function (req, file, cb) {
        const name = file.originalname.split(' ').join('_');
        const extension = MIME_TYPES[file.mimetype];
      cb(null, name + Date.now() + '.' + extension);
    }
  });
  
module.exports = multer({ storage: storage, limits: {fileSize: 5000000} }).single('file');