import express,{ Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { showChannel } from "../controllers/getChannel.controller";
import { deleteChannel } from "../controllers/deleteChannel.controller";


const routes :Router = express.Router()

routes.get("/:channelId",authMiddleware,showChannel)
routes.delete("/:channelId",authMiddleware,deleteChannel)


export default routes