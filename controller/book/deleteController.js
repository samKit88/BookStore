import bookSchema from "../../model/bookModel.js";

const deleteBook = async (req, res) => {
    try{
        //get book and delete
        const bookID = req.params.id;
        const userID = req.user.id;

        const bookDB = await bookSchema.findById(bookID);
            
        if(bookDB.bookLoomerID != userID){
            res.status(403).json({
                success: false,
                message: "Unauthorized.",
            });
        };
        
        await bookSchema.findByIdAndDelete(bookID);

        //check book
        if (!bookDB){
            res.status(404).json({
                success: false,
                message: "Book not found.",
            });
        };

       //success message
       res.status(201).json({
        success: true,
        message: "Successfuly deleted",
       });
    }catch(err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    };
};

export default deleteBook;