import { prisma } from "@repo/db/db";
import { Request, Response } from "express";

export const createChannel = async (req:Request,res:Response) =>{

try{
    const postChannel = await prisma.channel.create({
       data: {
        name: req.body.name,
        workspace: {
          connect: {
            id: req.params.workspaceId as string,
          },
        },
      },
    })

    return res.status(200).json({
        message:"Channel created"
    })
}catch(err){
  console.log(err)
 return res.status(500).json({
    message:"Server Error"
 })
}
}