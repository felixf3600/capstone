import React, { useState, useEffect } from "react";
import Header from "./Header";
import MainWindow from "./MainWindow";
import PlayerWindow from "./PlayerWindow";
import RulesWindow from "./RulesWIndow";
import MessageWindow from "./MessageWindow";
import ModalStartWindow from "./ModalStartWindow";
import io from "socket.io-client";
import Spectator from "./Spectator";

let socket;

const Game = (props) => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const [gameStart, setGameStart] = useState(false);
  const [spectators, setSpectators] = useState([]);
  const [players, setPlayers] = useState([]);
  const [playerOrder, setPlayer] = useState(0); //player order
  const [busted, setBusted] = useState(false);
  const [moves, setMoves] = useState([]);
  const [currentBoard, setCurrentBoard] = useState([]); // player board array
  const [mainBoardsStatus, setMainBoardStatus] = useState([]); // main board
  const [diceArray, setDiceArray] = useState([]);
  const [diceSet, setDiceSet] = useState([]);
  let currentPlayer = false;
  const ENDPOINT = "localhost:5000";

  // this is the is the main states.
  useEffect(() => {
    const { name, room, player } = props.location.state;

    socket = io(ENDPOINT);
    setName(name);
    setRoom(room);

    socket.emit("join", { name, room, player }, (/*{error}*/) => {
      // error is the error handling will use the data in error to do whats in the function.
      // alert(error); check to see if room is there or not.
    });

    return () => {
      socket.emit("disconnect");
      socket.off();
    };
  }, [ENDPOINT, props.location.state]);

  const startGame = () => {
    socket.emit("start");
  };

  useEffect(() => {
    socket.on("started", (info) => {
      console.log(players, info);
      if (!players.length) return <p>loading</p>;
      console.log(socket.id, players[info.index].id);
      if (socket.id === players[info.index].id) {
        currentPlayer = true;
      } else {
        currentPlayer = false;
      }
      setDiceSet(info.diceSet);
      setDiceArray(info.diceArray);
      console.log(diceArray, diceSet);
      setGameStart(true);
      gameTurn();
    });
  }, [players, diceSet, diceArray]);
  useEffect(() => {
    socket.on("player", (info) => {
      console.log(info);
      setPlayers(info.players);
      setCurrentBoard(info.currentBoard);
      setMainBoardStatus(info.mainBoard);

      // console.log(info, players);
    });
  }, [players, currentBoard, mainBoardsStatus]);

  useEffect(() => {
    socket.on("spectator", (spectator) => {
      setSpectators([...spectators, spectator]);
    });
  }, [spectators]);

  useEffect(
    () => {
      socket.on("currentPlayer", (player, gameBoard, playerBoards) => {
        if (player === socket.id) {
          // setCurrentPlayer(true);
        }
        setCurrentBoard(playerBoards);
        setMainBoardStatus(gameBoard);
      });
    },
    [currentBoard],
    [currentPlayer]
  );

  const checkBustStatus = () => {
    console.log(currentBoard);
    if (!currentBoard.length) {
      return <p>loading</p>;
    }
    const temporaryBoard = currentBoard[playerOrder];
    let busted = true;
    let selectionArray = [];
    // checks to see if busted by full column
    !mainBoardsStatus[diceArray[0].dice.set1 - 2].full
      ? (busted = false)
      : (diceArray[0].set1 = true);
    !mainBoardsStatus[diceArray[0].dice.set2 - 2].full
      ? (busted = false)
      : (diceArray[0].set2 = true);
    !mainBoardsStatus[diceArray[1].dice.set1 - 2].full
      ? (busted = false)
      : (diceArray[1].set1 = true);
    !mainBoardsStatus[diceArray[1].dice.set2 - 2].full
      ? (busted = false)
      : (diceArray[1].set2 = true);
    !mainBoardsStatus[diceArray[2].dice.set1 - 2].full
      ? (busted = false)
      : (diceArray[2].set1 = true);
    !mainBoardsStatus[diceArray[2].dice.set2 - 2].full
      ? (busted = false)
      : (diceArray[2].set2 = true);
    // checks to see if there are enough moves and if at least one number matches.

    selectionArray = [
      //grabs the list of numbers into an array
      !diceArray[0].set1 ? diceArray[0].dice.set1 : null,
      !diceArray[0].set2 ? diceArray[0].dice.set2 : null,
      !diceArray[1].set1 ? diceArray[1].dice.set1 : null,
      !diceArray[1].set2 ? diceArray[1].dice.set2 : null,
      !diceArray[2].set1 ? diceArray[2].dice.set1 : null,
      !diceArray[2].set2 ? diceArray[2].dice.set2 : null,
    ];
    //checks to see if the numbers in moves are present in the number array
    let newSelectionArray = [];
    const tempMoves = new Set(moves);
    if (tempMoves.length > 0) {
      newSelectionArray = new Set(selectionArray).map((number) =>
        tempMoves.find(
          (lookoutNumber) => lookoutNumber === number // need to ask about this tomorrow
        )
      );
    }
    if (!newSelectionArray.length) if (moves.length > 2) busted = true;

    //event listener for buttons
    if (!busted) {
      // function to send data to to back end
    }
    //checks dice to see which ones are busted by sets... variable set to false and if still false at the end then busted. also a vaiable for the number of moves you have. sets up a temporary board.

    // function to check if busted
  };
  const updatesTemporaryBoard = () => {
    // function will update the temporary white pawns
  };
  const updateServer = () => {
    // funciton will update the server with either the new positions of the player or the old one
  };

  const updateMessageWindow = () => {
    // updates the message window
  };
  const gameTurn = () => {
    if (currentPlayer) {
      //logic while its this players turn
      //get current board automatic from backend when current player ends
      checkBustStatus(); //broadcast roll
      //select dice and broadcast
      //modal to continue
      //if bust or not continue next player and send board info
    } else {
      // probably nothing. useEffect will change the info needed and component lifecycle will update the windows
    }
  };

  return (
    <div className="boardgame">
      <Header name={name} room={room} />
      <MainWindow
        playerBoard={currentBoard}
        diceArray={diceArray}
        setMoves={setMoves}
        moves={moves}
        diceSet={diceSet}
      />
      <PlayerWindow players={players} />
      <RulesWindow />
      <MessageWindow
        name={name}
        room={room}
        message={message}
        messages={messages}
      />
      <ModalStartWindow
        room={room}
        players={players}
        name={name}
        setGameStart={startGame}
      />
    </div>
  );
};

export default Game;
