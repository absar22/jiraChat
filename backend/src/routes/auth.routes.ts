import { Router } from "express";
import { signupUser, verifyOtp, loginUser } from "../controllers/auth.controller";

const router = Router();

router.post("/signup", signupUser);
router.post("/verify-otp", verifyOtp);
router.post("/login", loginUser);

export default router;