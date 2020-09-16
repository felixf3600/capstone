import React, { useState } from "react";
import { Link } from "react-router-dom";

const Master = () => {
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <div className="create-room">
      <div className="create-room__container">
        <h1 className="create-room__title">Create</h1>
        <p className="create-room__text">
          Please enter your name and room code and press Create. This is the
          code you will pass to the other players and any person that wants to
          spectate
        </p>
        <form className="create-room__button-container">
          <input
            type="text"
            className="create-room__input-name"
            placeholder="name"
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
          <input
            type="text"
            className="create-room__input-room"
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
            <button className="create-room__button-create">Create</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Master;
