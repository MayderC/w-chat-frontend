import React from "react";

export const MessageAnotherUser = ({ prop }) => {
  return (
    <>
      <div className="msg_another_user">
        <p className="msg">{prop.message}</p>
      </div>
    </>
  );
};
