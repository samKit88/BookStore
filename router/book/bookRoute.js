import express from "express";
import createBook from "../../controller/book/createController.js";
import requireAuth from "../../middleware/authenticator.js";
import getBooks from "../../controller/book/getBookController.js";
import updateBook from "../../controller/book/updateBookController.js";

//express router
const router = express.Router();

router.post('/create', requireAuth, createBook);
router.get('/book/:id', requireAuth, getBooks)
router.post('/update/:id', requireAuth, updateBook)


export default router;