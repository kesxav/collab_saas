import { prisma } from "@repo/db/db";
import { Request, Response } from "express";

export const getMessages = async (req:Request,res:Response)=>{
    try {
        const messages = await prisma.chat.findMany({
            where:{
                channelId:req.params.channelId as string
            },
            include:{
                sender:{
                    select:{
                        username:true
                    }
                }
            }
        })

        return res.status(200).json({
           messages
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}