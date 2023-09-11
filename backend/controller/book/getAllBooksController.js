import bookSchema from "../../model/bookModel.js";

const getAllBooks = async (req, res) => {

    try {
        const book = await bookSchema.find({});

        // return book info
        if (book === null) {
            res.status(400).json({error: "There are no Books."});
        } 
            
        res.status(200).json(
            book);

            
        

    } catch (err) {
        res.status(404).json({
            success: false,
            massege: err.massege,
        });
    };
};

export default getAllBooks;