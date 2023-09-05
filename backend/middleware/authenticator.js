import User from "../model/userModel.js";
import Jwt from "jsonwebtoken";

//Middleware function for authen
const requireAuth = async (req, res, next) => {
    //Authorization header
    const authHeader = req.headers['authorization'];

    if (authHeader) {
        //bearer Token
        console.log(authHeader);

        //define token 
        const token = authHeader.split(" ")[1];

        try {
            //verify the token
            const decoded = Jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

            //find user
            const user = await User.findById(decoded._id);

            if (!user) {
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized: User not found"
                });
            }
            //attach user authen
            req.user = user;

            next();
        } catch (error) {
            //If tooken is invalid 
            res.status(401).json({
                success: false,
                message: "Unauthorized: Invalid token",
            });
        }

    }else {
        //Authorization header missing 
        res.status(401).json({
            success: false,
            message: "Unauthorized: Authorization header not found",
        });
    }
};

export default requireAuth;

