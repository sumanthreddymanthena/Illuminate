import express from "express";
import Form from './../Form.js'
import {v4 as uuidv4} from 'uuid';



const formRouter = express.Router();



formRouter.post('/submitForm', async (req,res)=>{
const data  =req.body
await Form.create(data)
res.send(data)
console.log('form submitted')


})

export default formRouter;