import bookSchema from "../../model/bookModel.js";

const updateBook = async (req, res) => {
    try{
        //get book form the body
        const bookID = req.params.id;
        const bookUpdate = req.body;
        const userID = req.user.id;

        //get book from the db
        const bookDB = await bookSchema.findById(bookID);

        //update the book 
        if(!bookDB){
            res.status(404).json({
                success: false,
                message: "Book not found" 
            });
        }

        //check the user 
        if (bookDB.bookLoomerID != userID){
            res.status(403).json({
                success: false,
                message: "Unauthorized" 
            });
        }

        //save book updated info
        Object.keys(bookUpdate).forEach((key)=> {
           bookDB[key] = bookUpdate[key]; 
        }); 

        await bookDB.save();

        res.status(201).json({
            success: true,
            bookDB, 
        });

    }catch(err){
        res.status(500).json({
            success: false,
            message: err.message 
        });
    };
}

export default updateBook;