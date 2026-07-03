import { Router } from "express";
import bcrypt from "bcryptjs";
import jwt, { type SignOptions } from "jsonwebtoken";
import { User } from "../models/User.js";
import { config } from "../config.js";
import { validate } from "../middleware/validate.js";
import { loginSchema } from "../schemas.js";

export const authRouter = Router();

authRouter.post("/login", validate(loginSchema), async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  const ok = await bcrypt.compare(password, String(user.passwordHash));
  if (!ok) return res.status(401).json({ message: "Invalid credentials" });

  const signOptions: SignOptions = { expiresIn: config.jwtExpiresIn as SignOptions["expiresIn"] };
  const token = jwt.sign({ id: user.id, role: user.role }, config.jwtSecret, signOptions);
  res.cookie("token", token, { httpOnly: true, sameSite: "lax", secure: config.nodeEnv === "production" });
  return res.json({ token, user: { id: user.id, email: user.email, role: user.role } });
});

authRouter.post("/logout", (_req, res) => {
  res.clearCookie("token");
  res.json({ message: "Logged out" });
});
