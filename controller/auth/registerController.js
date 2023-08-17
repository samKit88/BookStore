import User from "../../model/userModel.js";
import mongoose from "mongoose";

const registerUser = async (req, res) => {
    const {firstName, lastName, email, password} = req.body;

    // check user data
    // const user = req.body
    // res.status(201).json({
    //     user
    // })

    try {
        const user = await User.register(firstName, lastName, email, password);

        await user.save();
        console.log(user)

        res.status(201).json({
            success: true,
            user: {
              firstName: user.firstName,
              lastName: user.lastName,
              email: user.email,
            },
            message: "Account Created",
        });
    }catch(error) {
        res.status(404).json({
          success: false,
          message: error.message,
        });
      }
}

export default registerUser;

