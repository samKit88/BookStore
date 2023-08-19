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
        res.status(201).json({
            success: true,
            massege: "Successfuly logged in",
            token,
        });
    } catch {
        res.status(404).json({
            success: false,
            //difine the error
            // error: error.message,
        });
    };
};

export default loginUser;