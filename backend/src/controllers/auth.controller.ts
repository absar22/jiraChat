import { Request, Response } from 'express'
import User from '../models/User'
import { hashPassword } from '../utils/hash'

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
    const hashedPassword = await hashPassword(password);
    // Create new user
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      isVerified: false
    });

    await newUser.save();

    res.status(201).json({
      verificationCode: Math.floor(Math.random()*100000),
      success: true,
      message: 'User created successfully'
    });

  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};
