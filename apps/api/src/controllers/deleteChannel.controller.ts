import { prisma } from "@repo/db/db";
import { Request, Response } from "express";

export const deleteChannel = async (req:Request,res:Response) =>{
    try {
        const channel = await prisma.channel.findFirst({
            where:{
                id:req.params.channelId as string,
                workspace:{
                    ownerId:req.user?.id
                }
            }
        })

        if(!channel){
            return res.status(404).json({
                message:"Channel not found"
            })
        }

        await prisma.channel.delete({
            where:{
                id:channel.id
            }
        })

        return res.status(200).json({
            success:true,
            message:"Channel deleted"
        })
    } catch (error) {
        return res.status(500).json({
            message:"Internal server error"
        })
    }
}