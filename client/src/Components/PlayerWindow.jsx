import React from "react";
// import { allPlayersOk } from "../../../server/users";

const PlayerWindow = ({ players }) => {
  if (!players) return <p>loading</p>;
  const playerDiv = players.map((player, index) => {
    return (
      <div key={index} className="player-window__container">
        <p className="player-window__player-name">{player.name}</p>
        <p className="player-window__score">{player.columns}</p>
      </div>
    );
  });

  return <div className="player-window">{playerDiv}</div>;
};

export default PlayerWindow;
