import mongoose, { Error } from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";

const schema = mongoose.Schema;

const userShcema = new schema({
    firstName: {
        type: "string",
        require: true
    },
    lastName: {
        type: "string",
        require: true
    },
    email: {
        type: "string",
        min: 2,
        max: 35,
        require: [true, "Please enter email!"]

    },
    password: {
        type: "string",
        min: 2,
        max: 25,
        require: [true, "Please enter password!"],
    },
});

//register function 
userShcema.statics.register = async function (
    firstName,
    lastName,
    email,
    password
) {
    
    //check name, email and password
    if (!firstName || !lastName || !email || !password){
        throw new Error("Please provide required info");
    };
    //check email if it exist 
    const exist = await this.findOne({ email });
    if (exist){
        if (exist.email === email) {
            throw new Error("An account with this email exsist.");
        };
    };

    //check email and password validation 
    if (!validator.isEmail(email))
        throw new Error("Please provide valid email");
    if (!validator.isStrongPassword(password))
        throw new Error("Password should be at least 8 characters long and should contain at least one uppercase letter, one lowercase letter, one number and one special character");


    // create salt for password
    const salt = await bcrypt.genSalt(10);
    // hash password
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.create({
        firstName,
        lastName,
        email,
        password: hashedPassword,
    });
    return user;
};

//login function 
userShcema.statics.login = async function (email, password) {
    
    if (!email)
        throw new Error("Please enter an email."); 
    if (!password)
        throw new Error("Please enter your password.");

    //get email and password
    const user = await this.findOne({email}).select("+password");

    if (!user) {
        throw new Error("A user with this email dosen't exsit.");
    }
    //compare the password 
    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error("Your password is incorrect.");
    };

    return user;
};

//create user model
const User = mongoose.model("User", userShcema);

export default User;