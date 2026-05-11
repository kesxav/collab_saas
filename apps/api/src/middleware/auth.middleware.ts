import jwt from "jsonwebtoken";
import { JWT_SECRET } from "@repo/common-backend/config";
import { Request,Response,NextFunction } from "express"

export const authMiddleware = (req:Request,res:Response,next:NextFunction) =>{
    
    try {
        
        const token = req.headers.authorization?.split(" ")[1];
        if(!token){
            return res.status(401).json({
                message:"No token provided"
            })
        }
         const verify = jwt.verify(token,JWT_SECRET)


         req.user = verify as {
            userId:string;
         }
       next()
         
    }catch(error:unknown){
    return res.status(401).json({
        message: "Invalid token"
    })}
} 