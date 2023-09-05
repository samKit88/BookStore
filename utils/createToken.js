import  Jwt  from "jsonwebtoken";

const createToken = (_id) => {
    return Jwt.sign({_id}, process.env.ACCESS_TOKEN_SECRET, {expiresIn: "5d"})
};

export default createToken;