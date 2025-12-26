import { Request, Response } from 'express'
import User from '../models/User'
import { hashPassword } from '../utils/hash'


export const signupUser = async(req:Request,res:Response) => {
  try{
    const {name,email,password,confirmPassword} = req.body
    if(!name || !email || !password || !confirmPassword){
        return res.status(400).json({message:'All fields are required'})
    }
    if(password !== confirmPassword){
        return res.status(400).json({message:'Passwords do not match'})
    }
    const existingUser = await User.findOne({email})
    if(existingUser){
        return res.status(400).json({message:'User already exists'})
    }
    const hashedPassword = await hashPassword(password)
    const newUser = new User({
        name,
        email,
        password:hashedPassword
    })
    return res.status(201).json({message:'User created successfully'})
  }
  catch(error){
    console.error(error)
    return res.status(500).json({message:'Internal server error'})
  }

}