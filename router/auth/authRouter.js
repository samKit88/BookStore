import registerUser from "../../controller/auth/registerController.js";

import express from "express";

//express router
const router = express.Router();

router.post('/signup', registerUser);


export default router;