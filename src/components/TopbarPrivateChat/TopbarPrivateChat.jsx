import "./index.scss";
import { useContext } from "react";
import { socketContext } from "../../context/socket/SocketContext";
import { useNavigate } from "react-router-dom";

export const TopbarPrivateChat = () => {
  let navigate = useNavigate();
  const { socket } = useContext(socketContext);

  const handleGetOut = async()  => {
    socket.disconnect()
    navigate('/app')
  }

  return (
    <>
      <div className="chat__topbar">
        <div onClick={ handleGetOut }>Salir</div>
      </div>
    </>
  );
};
