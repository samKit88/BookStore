import registerUser from "../../controller/auth/registerController.js";
import loginUser from "../../controller/auth/loginController.js";
import requireAuth from "../../middleware/authenticator.js";

import express from "express";

//express router
const router = express.Router();

router.post('/signup', registerUser);
router.post('/login', loginUser);


export default router;