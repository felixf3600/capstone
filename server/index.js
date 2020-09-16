const express = require("express");
const socketio = require("socket.io");
const http = require("http");

const {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
  getNextPlayer,
  allPlayersOk,
  getMainBoard,
  getNewBoard,
  getPlayersInRoom,
} = require("./users.js");

const PORT = process.env.PORT || 5000;

const router = require("./router");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(router);

io.on("connection", (socket) => {
  console.log("we have a new connection!!!!");

  socket.on("join", ({ name, room, player }, callback) => {
    const { error, user } = addUser({
      id: socket.id,
      name,
      room,
      player,
      columns: 0,
    });
    console.log(user);
    // if (error) return callback(error);
    // if (user.player) {
    // socket.emit("player", {

    //   user: 'player',
    //   text: `${user.name}, welcome to room: ${user.room}`,
    //   players: getPlayerList(user.room);
    // });
    io.in(user.room).emit("player", {
      // user: "player",
      players: getPlayersInRoom(user.room),
    }); // retuyrns player to the modalwindow to see the players ready to play
    // } else {
    io.in(user.room).emit("spectator", {
      user: "spectator",
      text: `${user.name} is watching`,
    }); // returns the spectator for the spectator window
    // }

    socket.join(user.room);

    // io.to(user.room).emit("roomData", {
    //   room: user.room,
    //   users: getUsersInRoom(user.room),
    // });

    callback();

    // console.log(name, room);
    // const error = true;
    // if (error) {
    //   callback({ error: "error" });
    // } //error handling; will pass back message back to the calling client
  });
  socket.on("start", () => {
    const index = 0;
    // const start = allPlayersOk();
    const user = getUser(socket.id);
    console.log(user);
    const currentBoard = getNewBoard(); //need to write
    const mainBoard = getMainBoard(); //need to write
    io.in(user.room).emit("started", {
      index: index,
      currentBoard: currentBoard,
      mainBoard: mainBoard,
    });
  });

  socket.on("sendMessage", (message, callback) => {
    const user = getUser(socket.id);

    io.to(user.room).emit("message", { user: user.name, text: message });
    callback();
    io.to(user.room).emit("roomData", {
      room: user.room,
      users: getUsersInRoom(user.room),
    });
  });

  socket.on("disconnect", () => {
    const user = removeUser(socket.id);
    if (user) {
      io.to(user.room).emit("message", {
        user: "admin",
        text: `${user.name} has left`,
      });
    }
  });
});

server.listen(PORT, () => console.log(`server has started on port ${PORT}`));
