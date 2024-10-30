import dotenv from "dotenv";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { auth } from "../config/firebase";

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET!;

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const userRecord = await auth.createUser({ email, password });
    const token = jwt.sign({ uid: userRecord.uid }, JWT_SECRET, {
      expiresIn: "1h",
    });
    res.status(201).json({ token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await auth.getUserByEmail(email);
    const token = jwt.sign({ uid: user.uid }, JWT_SECRET, { expiresIn: "1h" });
    res.json({ token });
  } catch (error: any) {
    res.status(400).json({ error: error.message });
  }
};
