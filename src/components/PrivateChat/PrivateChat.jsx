import { useState, useEffect, useContext, useRef } from "react";
import { InputMessage } from "../InputMessagge/InputMessage";
import { MessageCurrentUser } from "../MessagesCards/MessageCurrentUser/MessageCurrentUser";
import { TopbarPrivateChat } from "../TopbarPrivateChat/TopbarPrivateChat";
import { socketContext } from "../../context/socket/SocketContext";
import "./index.scss";
import { Context } from "../../context/Context";
import { MessageAnotherUser } from "../MessagesCards/MessageAnotherUser/MessageAnotherUser";

export const PrivateChat = ({myRef}) => {
  const { socket } = useContext(socketContext);
  const { PROFILE } = useContext(Context);
  const [data, setData] = useState([]);
  const [newMsg, setNewMsg] = useState({});
  const windowMsg = useRef();


  useEffect(() => {

    //global si
    // private no
    socket.emit("join-global", {username: PROFILE.username, soketid: socket.id});
    //global si
    // private no
    socket.on("joined", (response) => {
      const myData = JSON.parse(response);
      setData([...myData.messages]);
    });

    //  global si
    //  private no
    socket.on('online-user-list', (user) => {
      console.log(user)

    })

    //  global si
    //  private si
    socket.on('disconnect', () => console.log("se desconecta"))

    //  global si
    //  private si
    socket.on("message", (msg) => {
      // sokcet no tiene acceso al estado, pero si a la funcion set.
      // se setea un nuevo valor, y se observa el estado (newMsg) en el siguiente UseEffect, cuando cambia se inserta al array de mensajes
      setNewMsg({ ...JSON.parse(msg) });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //  global si
    //  private si
    document
      .getElementById("windowMsg")
      .scrollTo(0, document.getElementById("windowMsg").scrollHeight);
  }, [data]);

  useEffect(() => {
    //  global si
    //  private si
    setData((data) => [...data, newMsg]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newMsg]);

  const handleSetnewMessage = (msg) => {
    setNewMsg(msg);
  };

  return (
    <>
      <TopbarPrivateChat></TopbarPrivateChat>
      <div className="private__main">
        <div id="windowMsg" ref={windowMsg} className="messages_container">
          {data[0]?.message &&
            data.map((item) => {
              return item.username === PROFILE.username ? (
                <MessageCurrentUser
                  key={item.id_message}
                  prop={item}
                ></MessageCurrentUser>
              ) : (
                <MessageAnotherUser
                  key={item.id_message}
                  prop={item}
                ></MessageAnotherUser>
              );
            })}
        </div>
      </div>
      <InputMessage props={{ handleSetnewMessage }}></InputMessage>
    </>
  );
};
