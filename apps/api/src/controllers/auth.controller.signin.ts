import bcrypt from "bcrypt";
import { Request, Response } from "express";
import { prisma } from "@repo/db/db";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/common-backend/config";

export const signin = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email: req.body.email,
      },
    });

    const checkedPassword = user?.password && (await bcrypt.compare(req.body.password, user.password))
      
    if (!user || !checkedPassword) {
      return res.status(401).json({
        message: "Wrong credentials",
      });
    }

    const token = jwt.sign(
      {
        userId: user.id,
      },
      JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

   return res.status(200).json({
      token,
      message: "Logged in",
    });
  } catch (error: unknown) {
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
