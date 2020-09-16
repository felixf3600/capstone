import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div className="main">
      <div className="main__container">
        <h1 className="main__title">
          Welcome to my rendition of the Can't Stop boardgame
        </h1>
        <p className="main__text">
          Please select Create to create a new room, Join to join a room already
          created, and Spectate to watch a game.
        </p>
        <div className=" main__button-container">
          <Link to={"/master"}>
            <button className="main__button main__button-create">Create</button>
          </Link>
          <Link to={"/player"}>
            <button className="main__button main__button-join">Join</button>
          </Link>
          <Link to={"/spectator"}>
            <button className="main__button main__button-spectate">
              Spectate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Main;
