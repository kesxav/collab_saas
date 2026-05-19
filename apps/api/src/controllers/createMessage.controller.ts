import { prisma } from "@repo/db/db";
import { Request, Response } from "express";
import { getIo } from "../sockets/socket.js";

export const createMessage = async (req:Request,res:Response) =>{
    try {
        const channelId = req.params.channelId as string
        const io = getIo()
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
                    id:channelId
                }
            }
            }
        })

        console.log(channelId)

        io.to(channelId).emit("new-message",chat)


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