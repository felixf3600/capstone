import React, { useState } from "react";
import { Link } from "react-router-dom";

const Spectator = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="spectators">
      <div className="spectators__container">
        <h1 className="spectators__title">Join</h1>
        <p className="spectators__text">
          Please enter your name and the 4 digit room code you want to enter
          then press Create.
        </p>
        <form className="spectators__button-container">
          <input
            type="text"
            className="spectators__input-name"
            placeholder="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="text"
            className="spectators__input-room"
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
              state: { name: name, room: room, player: false },
            }}
          >
            <button className="spectators__button-join">Join</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Spectator;
