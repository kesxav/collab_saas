import express from "express"
import authRoutes from "./routes/auth.routes.js"
import workspaceRoutes from "./routes/workspace.route.js"
import channelRoutes from "./routes/channel.routes.js"
import messageRoutes from "./routes/messages.routes.js"

const app = express();

app.use(express.json());

app.use("/api/auth",authRoutes)
app.use("/api/workspaces",workspaceRoutes)
app.use("/api/channels",channelRoutes)
app.use("/api/channels",messageRoutes)

app.listen(3001);