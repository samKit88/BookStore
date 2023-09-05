import reviewBook from "../../model/reviewModel.js";
import bookSchema from "../../model/bookModel.js";

const bookReviewed = async (req, res) => {
    try{
        
        //get book
        const bookID = req.params.id;
        const userID = req.user.id;
        const reviewed = req.body;

        const bookDB = await bookSchema.findById(bookID);

        console.log(reviewed.comment);
        console.log(reviewed.rating);
         
        //check book
        if(!bookDB){
            res.status(404).json({
                success: false,
                message: "Book not found!",
            });
        };
        
        //new review 
        const newRview = new reviewBook({
            ...reviewed,
            book: bookID,
            reviewer: userID,
        }); 

        await newRview.save();

       //success message
       res.status(201).json({
        success: true,
        reviewed,
       });
    }catch(err) {
        res.status(500).json({
            success: false,
            message: err.message,
        });
    };
};

export default bookReviewed;