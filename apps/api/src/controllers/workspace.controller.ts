import { Response, Request } from "express";
import { prisma } from "@repo/db/db";

export const workspace = async (req: Request, res: Response) => {
 
  try {
     const { workspaceName } = req.body;
    

    const addWorkspace = await prisma.workspace.create({
      data: {
        name: workspaceName,
        owner: {
          connect: {
            id: req.user?.userId,
          },
        },
      },
    });

    console.log(addWorkspace)

    return res.status(201).json({
      message: "Workspace added",
    });
  } catch (error: unknown) {
    console.log(error)
    res.status(500).json({
      message: "Internal server error",
    });
  }
};
