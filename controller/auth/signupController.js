import { json } from "express";
import User from "../../model/userModel.js";


const signupUser = async (req, res) => {
    const {firstName, lastName, email, password} = req.body;

    try {
        const user = await User.signup(firstName, lastName, email, password);

        await user.save();
        // console.log(user)

        res.status(200).json({
            email: user.email,
            // success: true,
            // user: {
            //   firstName: user.firstName,
            //   lastName: user.lastName,
            //   email: user.email,
            // },
            // message: "Account Created",
        });

    }catch(error) {
        res.status(400).json({
          error: error.message
          // success: false,
          // message: error.message,
        });
      }
}

export default signupUser;

