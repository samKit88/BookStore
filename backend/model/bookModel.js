import User from "./userModel.js";
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    title: {
        type: "string",
        min: 2,
        require: [true, "Please provide book title"]
    },
    author:{
        type: "string",
        min: 2,
        max: 30,
        require: [true, "Please provide author name!"]
    },
    description: {
        type: "string",
        min: 2,
        max: 100,
        require: [true, "Please give short description about the book"]
    },
    bookLoomerName: {
        type: "string",
        min: 2,
        require: [true, "Please provide your name"]
    },
    bookLoomerID: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: [true, "Couldn't find the user"],
    },
    price: "Number",
    quantity: "Number",
    coverPage: {
        type: Buffer,         
    }, 
});

const bookSchema = mongoose.model("bookSchema", userSchema);

export default bookSchema;