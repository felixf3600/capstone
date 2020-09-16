import React from "react";

const Message = ({ message: { user, text }, name }) => {
  let isSendByCurrentUser = false;
  const trimmedName = name.trim().toLowerCase();
  if (user === trimmedName) {
    isSendByCurrentUser = true;
  }

  return isSendByCurrentUser ? (
    <div className="messageContainer justifyEnd">
      <p className="sentText pr-10">{trimmedName}</p>
      <div className="messageBox backgroundBlue">
        <p className="messageText colorWhite">{text}</p>
      </div>
    </div>
  ) : (
    <div className="messageContainer justifyStart">
      <p className="sentText backgroundLight">{text}</p>
      <div className="messageBox colorDark">
        <p className="sentText pl-10">{user}</p>
      </div>
    </div>
  );
};

export default Message;
