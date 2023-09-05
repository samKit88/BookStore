import User from "../../model/userModel.js";
import createToken from "../../utils/createToken.js";


const loginUser = async (req, res) => {
    //get email and password 
    const { email, password } = req.body;


    try {
        //pass info to login func
        const user = await User.login(email, password);

        if (!user) {
            throw new Error("Coudn't sign in.");
        };

        //create token 
        const token = createToken(user._id);

        res.status(200).json({
            // success: true,
            // massege: "Successfuly logged in",
            email, 
            token
        });
    } catch (error) {
        res.status(400).json({
            error: error.message
            // success: false,
            //difine the error
            // error: error.message,
        });
    };
};

export default loginUser;