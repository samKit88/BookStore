import express from "express";
import requireAuth from "../../middleware/authenticator.js";
import bookReviewed from "../../controller/review/reviewBook.js";

//express router
const router = express.Router();

router.post('/review/:id', requireAuth, bookReviewed);



export default router;