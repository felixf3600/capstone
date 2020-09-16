import React from "react";
import onlineIcon from "../assets/icons/onlineIcon.png";
import closeIcon from "../assets/icons/closeIcon.png";

const InfoBar = ({ room }) => {
  return (
    <div className="infoBar">
      <div className="leftInnerContainer">
        <img src={onlineIcon} alt="onine icon" className="onlineIcon" />
        <h3>{room}</h3>
      </div>
      <div className="rightInnerContainer">
        <a href="/">
          <img src={closeIcon} alt="close Icon" />
        </a>
      </div>
    </div>
  );
};

export default InfoBar;
