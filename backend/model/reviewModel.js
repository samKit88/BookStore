import mongoose from "mongoose";
import User from "./userModel.js";

const reviewSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: [true, "Couldn't find the book."],
    },
    reviewer: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: [true, "Couldn't find the user."],
    },
    comment: {
        type: "string",
        min: 2,
        max: 100,
    },
    rating: "Number",
});

const reviewBook = mongoose.model("reviewBook", reviewSchema);

export default reviewBook;