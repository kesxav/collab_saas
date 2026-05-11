import express from "express"
import authRoutes from "./routes/auth.routes.js"
import workspaceRoutes from "./routes/workspace.route.js"

const app = express();

app.use(express.json());

app.use("/api/auth",authRoutes)
app.use("/api/workspace",workspaceRoutes)

app.listen(3001);