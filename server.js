import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./config/databaseConfig.js";
import authRouter from "./router/auth/authRouter.js";



dotenv.config();
const PORT  = parseInt(process.env.PORT) || 3000; 

//connect to database
connectDatabase();

//middleware
const app = express();
app.use(express.json());
app.use(cors());

//setup router
app.use("/api/v1", authRouter);

app.get('/', (req, res) => {
    res.send("Hello world!!!");
});


const server = app.listen(PORT, (req, res) => {
    console.log(`server is listing at port: ${PORT}`);
});
