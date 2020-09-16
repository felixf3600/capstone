import React from "react";
// import { allPlayersOk } from "../../../server/users";

const PlayerWindow = ({ players }) => {
  console.log(players);
  const playerDiv = players.map((player) => {
    return (
      <div className="player-window__container">
        <p className="player-window__player-name">{player.name}</p>
        <p className="player-window__score">{player.columns}</p>
      </div>
    );
  });

  return <div className="player-window">{playerDiv}</div>;
};

export default PlayerWindow;
