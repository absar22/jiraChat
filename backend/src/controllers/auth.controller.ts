import { Request, Response } from 'express'
import User from '../models/User'
import { hashPassword } from '../utils/hash'
import crypto from 'crypto'
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
    const otp = 123456  // hardcode for now
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

