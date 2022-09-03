import "./index.scss";
import { useContext } from "react";
import { socketContext } from "../../context/socket/SocketContext";
import { useNavigate } from "react-router-dom";
import user from '../../assets/img/user.svg'

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
        <div className="users-online">
          <div className="users-icon">
            <img src={user} alt="" />
          </div>
          <div><p>100</p></div>
        </div>
        <div className="get-out" onClick={ handleGetOut }>Salir</div>
      </div>
    </>
  );
};
