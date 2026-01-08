import { Request, Response } from 'express'
import User from '../models/User'
import { hashPassword } from '../utils/hash'
import bcrypt from 'bcryptjs'
import crypto from 'crypto'
import jwt from 'jsonwebtoken'

export const signupUser = async (req: Request, res: Response) => {
  try {
    const { username, email, password, confirmPassword } = req.body;
    if (!username || !email || !password || !confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      });
    }
    if (password !== confirmPassword) {
      return res.status(400).json({
        success: false,
        message: 'Passwords do not match'
      });
    }
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: 'User already exists'
      });
    }
    const verificationId = crypto.randomInt(1000000, 9999999).toString()
    const otp = '123456'  // hardcode for now
    const hashedPassword = await hashPassword(password);
    // Create a new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      isVerified: false,
      verificationCode: otp,
      verificationId: verificationId
    });
    await newUser.save();
    console.log('otp',otp)
    res.status(201).json({
      data: {verificationId},
      success: true,
      message: 'Signup succesful please verfy your otp'
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

export const verifyOtp = async (req:Request,res:Response) => {

  const {email,verificationId,otp} = req.body
  if(!email || !verificationId || !otp){
    return res.status(400).json({
      success: false,
      message: 'All fields are required'
    })
  }
  const user = await User.findOne({email})
  if(!user){
    return res.status(400).json({
      success: false,
      message: 'User not found'
    })
  }
  if(user.isVerified){
    return res.status(400).json({
      success: false,
      message: 'User already verified'
    })
  }
  if(  user.verificationCode !== (otp) || user.verificationId !== verificationId){
    return res.status(400).json({
      success:false,
      message:'Invalid verification code'
    })
  }
  user.isVerified = true
  user.verificationCode = null
  user.verificationId = null
  await user.save()
 
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET!, { expiresIn: '7d' });

  return res.status(200).json({
    success:true,
    message:'User verified successfully',
    token
  })
}

export const loginUser = async (req:Request,res:Response) => {
  try{
    const {email,password} = req.body
    if(!email || !password){
      return res.status(400).json({
        success:false,
        message: 'All fields are required'
      })
    }
    const user = await User.findOne({email})
    if(!user){
      return res.status(400).json({
        success:false,
        message: 'User not found'
      })
    }
    if(!user.isVerified){
      return res.status(400).json({
        success:false,
        message: 'User not verified'
      })
    }
    const isPasswordValid = await bcrypt.compare(password, user.password)
    if(!isPasswordValid){
      return res.status(400).json({
        success:false,
        message: 'Invalid password'
      })
  }
   const token = jwt.sign(
      { userId: user._id },
      process.env.JWT_SECRET!,
      { expiresIn: '7d' }
    )
    return res.status(200).json({
      success:true,
      message:'Login successful',
      token
    })
    }catch(error){
      return res.status(500).json({
        success:false,
        message:'Internal server error'
      })
    }

}
  
