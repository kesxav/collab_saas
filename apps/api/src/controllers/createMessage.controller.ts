import { prisma } from "@repo/db/db";
import { Request, Response } from "express";

export const createMessage = async (req:Request,res:Response) =>{
    try {
        const chat = await prisma.chat.create({
            data:{
                chat:req.body.message,
            sender:{
                connect:{
                    id:req.user?.id
                }
            },
            channel:{
                connect:{
                    id:req.params.channelId as string
                }
            }
            }
        })


        return res.status(201).json({
            sucess:true,
            chat
               })

    } catch (error) {
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}