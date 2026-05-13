import express,{ Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { showChannel } from "../controllers/getChannel.controller";


const routes :Router = express.Router()

routes.get("/:channelId",authMiddleware,showChannel)


export default routes