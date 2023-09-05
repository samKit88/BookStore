import multer from "multer";
import bookSchema from "../model/bookModel.js";


const storageMiddleware = async (req, res, next) => {


    const uploadImage = req.file;

    //config multer 
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, __dirname + './Uploads/books');
        },
        filename: function (req, file, callback) {
            cb(null, file.originalname);
        },
    });

    const upload = multer({storage:storage});

    console.log(upload.destination, upload.filename);
    console.log(uploadImage);

    next();
}


export default storageMiddleware;


// const fileController = async (req, res) => {
//     console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
//     const bookID = req.params.id;

//     const book = await bookSchema.findById(bookID);

//     fileUrl = book.coverPage;

//     console.log("PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP");
//     console.log(fileUrl);
// };

// export default fileController;