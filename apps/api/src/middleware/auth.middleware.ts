import jwt, { JwtPayload } from "jsonwebtoken";
import { JWT_SECRET } from "@repo/common-backend/config";
import { Request,Response,NextFunction } from "express"
import { prisma } from "@repo/db/db";

export const authMiddleware = async (req:Request,res:Response,next:NextFunction) =>{
    
    try {
        
        const token = req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({
                message:"No token provided"
            })
        }
         const verify = jwt.verify(token,JWT_SECRET) as JwtPayload & {userId:string}


         req.userId = verify

        const user=  await prisma.user.findUnique({
            where:{
                id: req.userId.userId
            },
            select:{
                id:true,
                username:true,
                email:true,
                avatar:true,
                createdAt:true,
            }
         })

         if(!user){
            return res.status(401).json({
                message: "User not found"
            })
         }

         req.user = user
       next()
         
    }
    catch(error:unknown){
    return res.status(401).json({
        message: "Invalid token"
    })}
} 