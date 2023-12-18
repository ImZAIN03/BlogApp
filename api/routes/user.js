import express from "express";
import User from '../models/UserSchema.js'

const UserRouter = express.Router();
UserRouter.use(express.json());

UserRouter.get("/", async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});


UserRouter.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = await User.create({ name, email, password });
        res.status(200).json({ msg: "User Registered Successfully", user: user });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

UserRouter.post("/login", async (req,res) => {
    try {
        const {email,password} = req.body;
        const existUser = await User.findOne({email, password})
        if(!existUser){
            res.status(404).json({ error: "User Not Found" });
        }
        res.status(201).json({msg: "User Logged In", user: existUser})
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
})

export default UserRouter;
