import "./index.scss";
import { Outlet } from "react-router-dom";
import chatPreviewImg from "../../assets/img/chatpreview.svg";

import { InputMessage } from "../InputMessagge/InputMessage";
import "./index.scss";


export const AppChatview = () => {


  return (
    <>
      <main className="main_chat">
        <div className="main_chat-img">
          <img src={chatPreviewImg} alt="" srcSet="" />
        </div>

        <div className="message_view">
          <Outlet></Outlet>

          <div className="message_input">
            <InputMessage  ></InputMessage>
          </div>
        </div>
      </main>
    </>
  );
};
