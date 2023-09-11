import signupUser from "../../controller/auth/signupController.js";
import loginUser from "../../controller/auth/loginController.js";



import express from "express";

//express router
const router = express.Router();

router.post('/signup', signupUser);
router.post('/login', loginUser);



export default router;