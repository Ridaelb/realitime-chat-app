const express = require("express");
const socketio = require("socket.io");
const http = require("http");
const cors = require("cors");

const { addUser, removeUser, getUser, getUsersInRoom } = require("./users");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();

app.use(router);
app.use(cors());

const server = http.createServer(app);

const io = socketio(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  /* console.log("New connection."); */

  socket.on("join", ({ username, room }, callback) => {
    const { error, user } = addUser({ id: socket.id, username, room });

    if (error) return callback(error);

    socket.emit("message", { username: "admin", text: `${user.username}, welcome to room ${user.room}.` });
    socket.broadcast.to(user.room).emit("message", { username: "admin", text: `${user.username} has joined!` });
    
    socket.join(user.room);

    io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });

    callback();
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);
    
    if(user){
      io.to(user.room).emit("message", { username: user.username, text: message });
    }

    callback();
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if(user){
      /* console.log(user) */
      io.to(user.room).emit('message', {username:"admin", text:`${user.username} has left.`});
      io.to(user.room).emit('roomData', { room: user.room, users: getUsersInRoom(user.room) });;
    }
  });
});

server.listen(PORT, () => console.log(`Server has started in port ${PORT}`));