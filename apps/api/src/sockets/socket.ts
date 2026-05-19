import {Server} from "socket.io"
let io:Server

export const initSocket = (server:any)=>{
    io= new Server(server,{
        cors:{
            origin:"*"
        }
    })

    io.on("connection",(socket)=>{
        console.log("User connected:", socket.id);

        socket.on("join-channel",(channelId)=>{
            socket.join(channelId);
            console.log(`Joined channel ${channelId}`)
        })

        socket.on("disconnect",()=>{
            console.log("User disconnected")
        })
    })
}

export const getIo = ()=>{
    if(!io){
        throw new Error("Socket.io not initialized")
    }
    return io;
}