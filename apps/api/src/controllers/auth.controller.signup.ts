import bcrypt from "bcrypt";
import { prisma, Prisma } from "@repo/db/db";
import { Response,Request } from "express"; 


const signup = async (req:Request, res:Response) => {
  try {
    const { username, email, password } = req.body;

    const hassedPassword = await bcrypt.hash(password, 5);
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hassedPassword,
      },
    }); 

    console.log(user)

    res.status(201).json({
      message: "User created"
    });

  } catch (error:unknown) {
    if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === "P2002") {
      return res.status(400).json({
        message: "User already exists",
      });
    }

   return res.status(500).json({
      message: "Internal server error",
    });
  }
};

export default signup;
