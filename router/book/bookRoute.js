import express from "express";
import createBook from "../../controller/book/createController.js";
import requireAuth from "../../middleware/authenticator.js";
import getBooks from "../../controller/book/getBookController.js";
import updateBook from "../../controller/book/updateBookController.js";
import deleteBook from "../../controller/book/deleteController.js";
//express router
const router = express.Router();

router.post('/create', requireAuth, createBook);
router.get('/book/:id', requireAuth, getBooks);
router.post('/update/:id', requireAuth, updateBook);
router.delete('/delete/:id', requireAuth, deleteBook);


export default router;