import multer from 'multer'
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';


const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
console.log("thedir",__dirname)


console.log('the second',__dirname.split('\\middleware'));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const uploadDir = path.join(__dirname.split("\\middleware")[0], 'Uploads', 'books');
        cb(null, uploadDir);
    },
    filename: function (req, file, callback) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);

        // Use path module to get the file extension
        const fileExtension = path.extname(file.originalname);

        // Generate the filename with the original extension
        callback(null, file.fieldname + '-' + uniqueSuffix + fileExtension);
    },
});


const upload = multer({ storage: storage });

const storageMiddleware = upload.single('uploadImage');

export default storageMiddleware
