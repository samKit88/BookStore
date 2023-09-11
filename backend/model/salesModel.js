import mongoose from "mongoose";
import User from "./userModel.js";

const salesSchema = new mongoose.Schema({
    book: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: [true, "Couldn't find the book."],
    },
    seller: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: [true, "Couldn't find the user."],
    },
    buyer: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User',
        required: [true, "Couldn't find the user."],
    },
    quantityOrder: {
        type: "Number", 
        required: [true, "Please provide number of order"],
    },
    totalPrice: {
        type: "Number", 
        required: [true, "Couldn't find the total price."],
    },
});

const salesBook = mongoose.model("salesBook", salesSchema);

export default salesBook;