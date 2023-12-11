import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDatabase from "./config/databaseConfig.js";
import authRouter from "./router/auth/authRouter.js";
import bookRouter from "./router/book/bookRoute.js";
import reviewRouter from "./router/review/reviewRoute.js";
import salesRouter from "./router/sales/salesRoute.js";

dotenv.config();
const PORT = parseInt(process.env.PORT) || 3000;

//connect to database
connectDatabase();

//middleware
const app = express();
app.use(express.json());
app.use(cors());

//setup router
app.use("/api/v1", authRouter);
app.use("/api/v1", bookRouter);
app.use("/api/v1", reviewRouter);
app.use("/api/v1", salesRouter);

app.get("/", (req, res) => {
  res.send("Hello world!!!");
});

app.listen(PORT, (req, res) => {
  console.log(`server is listing on port: ${PORT}`);
});
