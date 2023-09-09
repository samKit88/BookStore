import User from "../../model/userModel.js";
import bookSchema from "../../model/bookModel.js";

const createBook = async (req, res) => {
  console.log(req.body)
  const path = req.file.path;
  console.log("path", path)

  try {
    //get book
    const book = req.body;
    const addedBy = req.user._id;

    console.log("Added by " + addedBy);
    //accept the path for cover page
    //const path = req.file.path;

    //create new book
    const newBook = new bookSchema({
      ...book,
      bookLoomerID: addedBy,
      coverPage: path
      //coverPage: path,
    });

    await newBook.save();

    res.status(200).json(newBook);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

export default createBook;
