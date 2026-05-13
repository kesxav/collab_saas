import { prisma } from "@repo/db/db";
import { Request, Response } from "express";

export const getWorkspace = async (req:Request,res:Response) =>{

try{
    const workspace = req.params.workspaceId as string

    const showWorkspace = await prisma.workspace.findFirst({
        where:{
            id:workspace,
            ownerId:req.user?.id
        }
})

console.log(showWorkspace)

if(!showWorkspace){
    return res.status(401).json({
        message:"Workspace not found"
    })
}

return res.status(200).json({
    success:true,
    showWorkspace
    })

}catch(err){
     return res.status(500).json({
        message:"Internal server error"
    })
}
}