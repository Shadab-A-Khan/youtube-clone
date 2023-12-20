import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-sm p-2">
      <div>
        <img
          className="w-12 h-12"
          alt="user"
          src="https://www.pngitem.com/pimgs/m/78-786293_1240-x-1240-0-avatar-profile-icon-png.png"
        />
      </div>
      <span className="font-semibold pr-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
