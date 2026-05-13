import express,{ Router } from "express";
import { authMiddleware } from "../middleware/auth.middleware";
import { createMessage } from "../controllers/createMessage.controller";
import { getMessages } from "../controllers/getMessages.controller";


const routes:Router = express.Router()

routes.post("/:channelId/messages",authMiddleware,createMessage)
routes.get("/:channelId/messages",authMiddleware,getMessages)

export default routes