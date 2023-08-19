import User from "../../model/userModel.js";
import bookSchema from "../../model/bookModel.js";

const createBook = async (req, res) => {
    
    try{
        //get book
        const book = req.body;
        const addedBy = req.user._id;

        //create new book
        const newBook = new bookSchema({
            ...book,
            bookLoomerID: addedBy,
        }); 

        await newBook.save();

        res.status(201).json({
            success: true,
            book: newBook,
        });
    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message,
        });
    };
};

export default createBook;