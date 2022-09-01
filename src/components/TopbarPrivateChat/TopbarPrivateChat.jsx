import "./index.scss";
import { useContext } from "react";
import { socketContext } from "../../context/socket/SocketContext";

export const TopbarPrivateChat = () => {
  const { socket } = useContext(socketContext);
  return (
    <>
      <div className="chat__topbar">
        <span onClick={() => socket.disconnect()}>click</span>
      </div>
    </>
  );
};
