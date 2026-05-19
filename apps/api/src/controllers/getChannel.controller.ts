import { prisma } from "@repo/db/db";
import { Request, Response } from "express";

export const showChannel = async (req: Request, res: Response) => {
  try {
    const channelId = req.params.channelId as string;

    const channel = await prisma.channel.findUnique({
      where: {
        id: channelId,
      },
    });

    return res.status(200).json({
      succes: true,
      channel,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal Server error",
    });
  }
};
