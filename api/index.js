import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import './db/database.js'
import UserRouter from "./routes/user.js";

dotenv.config();

const port = process.env.PORT;
const app = express();

app.use(express.json())
app.use(cors({credentials: true}))

//using routes
app.use("/api/user", UserRouter)


app.listen(port, () => {
    console.log("App Running on Port", port);
});