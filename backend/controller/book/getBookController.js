import bookSchema from "../../model/bookModel.js";

const getBooks = async (req, res) => {

    try {

        //get id 
        const id = req.params.id;
        
        const book = await bookSchema.findById(id);

        // return book info
        if (!book) {
            res.status(404).json({
                success: false,
                massge: "Book not found",
            });
        } else {
            res.status(201).json({
                success: true,
                book,
            });
        };

    } catch (err) {
        res.status(404).json({
            success: false,
            massege: err.massege,
        });
    };
};

export default getBooks;