import salesBook from "../../model/salesModel.js";
import bookSchema from "../../model/bookModel.js";

const sellBook = async (req, res) => {
    try {
        //get book
        const bookID = req.params.id;
        const buyer = req.user.id;
        const {quantityOrder} = req.body;


        const bookDB = await bookSchema.findById(bookID);
        //check book if not sold
        if (!bookDB) {
            res.status(404).json({
                success: false,
                message: "Book not found!"
            });
        };

        if (bookDB.quantity < 1) {
            res.status(404).json({
                success: false,
                message: "All books are sold!"
            });
        }

        // const soldBook = new salesBook;

        if (quantityOrder > bookDB.quantity) {
            res.status(404).json({
                success: false,
                message: "No book."
            });
        };

        const newQuantity = bookDB.quantity - quantityOrder
        const totalPrice = quantityOrder * bookDB.price;
        
        
        await bookSchema.findOneAndUpdate({_id: bookID},
            {
                quantity : newQuantity
            });


            // console.log(updateQuantity)

        // create new sales info
        const newSales = new salesBook({
            quantityOrder,
            book: bookID,
            buyer: buyer,
            seller: bookDB.bookLoomerID,
            totalPrice, 
        });

        // console.log(newSales)


        await newSales.save();
        // await bookSchema.save();

        res.status(200).json({
            success: true,
            message: "Successful",
            newSales: newSales
        });

    } catch (error) {
        res.status(404).json({
            success: false,
            message: error.message
        });
    };

};

export default sellBook;