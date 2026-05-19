import express,{ Router } from "express";
import { createWorkspace } from "../controllers/createWorkspace.controller";
import { authMiddleware } from "../middleware/auth.middleware";
import { getUserWorkspace } from "../controllers/getUserWorkspaces.controller";
import { getWorkspace } from "../controllers/getWorkspace.controller";
import { getChannels } from "../controllers/getUserChannles.controller";
import {createChannel} from "../controllers/CreateChannel.controller"
import { deleteWorkspace } from "../controllers/deleteWorkspace.controller";


const routes:Router = express.Router()

routes.post("/",authMiddleware,createWorkspace)
routes.get("/",authMiddleware,getUserWorkspace)
routes.get("/:workspaceId",authMiddleware,getWorkspace)
routes.delete("/:workspaceId",authMiddleware,deleteWorkspace)
routes.post("/:workspaceId/channels",authMiddleware,createChannel)
routes.get("/:workspaceId/channels",authMiddleware,getChannels)


export default routes