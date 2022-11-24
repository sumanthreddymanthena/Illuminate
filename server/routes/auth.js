import express from "express";
import User from './../User.js'
import bcrypt from 'bcrypt'

import Joi from 'joi';

const authRouter = express.Router();
authRouter.post("/login", async(req,res)=>{
    try{
        ///const{error}=validate(req.body);
        ///if(error)
            ///return res.status(400).send({message: error.details[0].message});

        const user =await User.findOne({email: req.body.email});
        if(!user)
            return res.status(401).send({message: "invalid Email or Password"});

        const validPassword= await bcrypt.compare(
            req.body.password, user.password
        );
        
        if(!validPassword)
            return res.status(401).send({message: "invalid Email or Password"});

        const token= user.generateAuthToken();
        return res.status(200).send({data: token, message: "Logged in successfully"})

    }catch(error){
        return res.status(500).send({message:"Internal Server error"})
    }
})

const validate=(data)=>{
    const schema=Joi.object({
        email:Joi.string().email().required().label("Email"),
        password:Joi.string().required().label("Password")
    });
    return schema.validate(data);

}
export default authRouter;