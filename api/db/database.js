import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(() => console.log("Connected To Database"))
.catch(err=>console.log(err))