import { useState, useEffect, useContext } from "react";
import { InputMessage } from "../InputMessagge/InputMessage";
import { MessageCurrentUser } from "../MessagesCards/MessageCurrentUser/MessageCurrentUser";
import { TopbarPrivateChat } from "../TopbarPrivateChat/TopbarPrivateChat";
import { socketContext } from "../../context/socket/SocketContext";
import "./index.scss";
import { MessageAnotherUser } from "../MessagesCards/MessageAnotherUser/MessageAnotherUser";

export const PrivateChat = () => {
  const { socket } = useContext(socketContext);
  const [data, setData] = useState([]);
  const [newMsg, setNewMsg] = useState({});

  useEffect(() => {
    socket.emit("join-global");
    socket.on("joined", (response) => {
      const myData = JSON.parse(response);
      setData([...myData.messages]);
    });

    socket.on("message", (msg) => {
      // sokcet no tiene acceso al estado, pero si a la funcion set.
      // se setea un nuevo valor, y se observa ese estado, cuando cambia, se iserta al array de mensajes
      setNewMsg({ ...JSON.parse(msg) });
    });
  }, []);

  useEffect(() => {
    setData([...data, newMsg]);
  }, [newMsg]);

  const handleSetnewMessage = (msg) => {
    setNewMsg(msg);
  };

  return (
    <>
      <TopbarPrivateChat></TopbarPrivateChat>
      <div className="private__main">
        <MessageCurrentUser></MessageCurrentUser>

        {data[0]?.message &&
          data.map((item) => (
            <MessageAnotherUser
              key={item.id_message}
              prop={item}
            ></MessageAnotherUser>
          ))}
      </div>
      <InputMessage props={{ handleSetnewMessage }}></InputMessage>
    </>
  );
};
