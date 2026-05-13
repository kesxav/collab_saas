import { prisma } from "@repo/db/db";
import { Response,Request } from "express";

export const getChannels = async (req:Request,res:Response) => {

    const workspaceId = req.params.workspaceId as string

    const getChannel = await prisma.channel.findMany({
        where:{
            workspaceId
        }
    })

    return res.status(200).json({
        success:true,
        getChannel
    })
    
}