import express,{ Router } from "express";
import { workspace } from "../controllers/workspace.controller";
import { authMiddleware } from "../middleware/auth.middleware";

const routes:Router = express.Router()

routes.post("/",authMiddleware,workspace)

export default routes