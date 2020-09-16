const users = [];
const players = [];
let currentPlayer = 0;
let playerCount = 0;
let playerStart = 0;
const playerBoard = {
  column1: 0,
  column2: 0,
  column3: 0,
  column4: 0,
  column5: 0,
  column6: 0,
  column7: 0,
  column8: 0,
  column9: 0,
  column10: 0,
  column11: 0,
};
const mainBoard = [
  { max: 3, full: false, player: "" },
  { max: 4, full: false, player: "" },
  { max: 5, full: false, player: "" },
  { max: 6, full: false, player: "" },
  { max: 7, full: false, player: "" },
  { max: 7, full: false, player: "" },
  { max: 7, full: false, player: "" },
  { max: 6, full: false, player: "" },
  { max: 5, full: false, player: "" },
  { max: 4, full: false, player: "" },
  { max: 3, full: false, player: "" },
];
const playerBoards = [playerBoard, playerBoard, playerBoard, playerBoard];
const getNextPlayer = (playerIndex) => {
  if (currentPlayer + 1 === null) currentPlayer = 0;
  else currentPlayer++;
  return currentPlayer;
};
const getNewBoard = () => {
  return playerBoards;
};

const getMainBoard = () => {
  return mainBoard;
};
const addUser = ({ id, name, room, player, columns }) => {
  // name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  // const existingUser = users.find(
  //   (user) => user.room === room && user.name === name
  // );
  // if (existingUser) {
  //   return { error: "user is taken" };
  // }
  const tempPlayer = player;
  // player && players.length < 4 ? (player = tempPlayer) : (player = false);
  const user = { id, name, room, player, columns };
  users.push(user);
  // if (player) {
  players.push(user);
  // playerCount++;
  // }
  return { user };
};
const allPlayersOk = () => {
  playerStart++;
  if (playerStart === playerCount) return true;
};
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);
  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);
const getUsersInRoom = (room) => users.filter((user) => user.room === room);
const getPlayersInRoom = (room) => players.filter((user) => user.room === room);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
  getNextPlayer,
  allPlayersOk,
  getNewBoard,
  getMainBoard,
  getPlayersInRoom,
};
