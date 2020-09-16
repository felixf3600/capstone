import React from "react";

const Header = ({ name, room }) => {
  return (
    <div className="header">
      <div className="header__logo-container">
        <h1 className="header__title">CAN'T STOP</h1>
        <h2 className="header__sub-title">{`ROOM: ${room}, PLAYER: ${name}`}</h2>
      </div>
      <div className="header__text-container">
        <p className="header__text">
          Welcome to my redition fo the Board Game Can't Stop
        </p>
        <p className="header__text">
          for info and suggestions about this game email me at
          felixf3600@gmail.com
        </p>
      </div>
    </div>
  );
};

export default Header;
