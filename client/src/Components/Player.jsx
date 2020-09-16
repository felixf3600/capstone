import React, { useState } from "react";
import { Link } from "react-router-dom";

const Player = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="player">
      <div className="player__container">
        <h1 className="player__title">Join</h1>
        <p className="player__text">
          Please enter your name and the 4 digit room code you want to enter
          then press Create.
        </p>
        <form className="player__button-container">
          <input
            type="text"
            className="player__input-name"
            placeholder="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="text"
            className="player__input-room"
            placeholder="room"
            onChange={(event) => {
              setRoom(event.target.value);
            }}
          />
          <Link
            onClick={(event) =>
              !name || !room ? event.preventDefault() : null
            }
            to={{
              pathname: "/game",
              state: { name: name, room: room, player: true },
            }}
          >
            <button className="player__button-join">Join</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Player;
