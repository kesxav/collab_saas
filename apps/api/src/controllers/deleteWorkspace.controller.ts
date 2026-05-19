import { prisma } from "@repo/db/db";
import { Request, Response } from "express";

export const deleteWorkspace = async (req:Request,res:Response)=>{
   try {
    const workspace = await prisma.workspace.findFirst({
        where:{
            id: req.params.workspaceId as string,
            ownerId:req.user?.id
        }
    })

    if(!workspace){
        return res.status(404).json({
            message:"Workspace not found"
        })
    }
     
    await prisma.workspace.delete({
        where:{
            id:workspace.id
        }
    })

    return res.status(200).json({
        success:true,
        message:"Workspace deleted"
    })
   } catch (error) {
    console.log(error)
    return res.status(500).json({
        message:"Internal server error"
   })
}
}