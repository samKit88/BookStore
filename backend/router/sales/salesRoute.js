import express from "express";
import requireAuth from "../../middleware/authenticator.js";
import sellBook from "../../controller/sales/salesController.js";

//express router
const router = express.Router();

router.post('/buy/:id', requireAuth, sellBook);



export default router;