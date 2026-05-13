import { prisma } from "@repo/db/db";
import { Request, Response } from "express";

export const getUserWorkspace = async (req:Request,res:Response) => {
    try {
    const workspace = await prisma.workspace.findMany({
        where:{
            ownerId:req.user?.id
        }
    })

    return res.status(201).json({
        success:true,
        workspace
    })
}catch(err){
    return res.status(500).json({
        message:"Internal server error"
    })
}
}