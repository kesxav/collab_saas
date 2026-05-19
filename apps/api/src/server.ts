import http from "http"
import app from "./app.js"

import { initSocket } from "./sockets/socket"

const server = http.createServer(app);

initSocket(server);

server.listen(3001,()=>{
    console.log("Server running")
})