import "./index.scss";
import { Outlet } from "react-router-dom";
import chatPreviewImg from "../../assets/img/chatpreview.svg";
import { useState } from "react";
import { InputMessage } from "../InputMessagge/InputMessage";
import "./index.scss";

export const AppChatview = () => {
  const [Message, setMessage] = useState({ msg: "" });

  const handleSetInputValue = ({ target }) => {
    setMessage({ ...Message, msg: target.value });
  };

  return (
    <>
      <main className="main_chat">
        <div className="main_chat-img">
          <img src={chatPreviewImg} alt="" srcSet="" />
        </div>

        <div className="message_view">
          <Outlet></Outlet>

          <div className="message_input">
            <button>file</button>
            <button>emoji</button>
            <InputMessage props={{ handleSetInputValue }}></InputMessage>
            <button>Enviar</button>
          </div>
        </div>
      </main>
    </>
  );
};
