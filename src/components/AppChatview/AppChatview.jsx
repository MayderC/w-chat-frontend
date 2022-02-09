import "./index.scss";
import { Outlet } from "react-router-dom";
import chatPreviewImg from "../../assets/img/chatpreview.svg";

export const AppChatview = () => {
  return (
    <>
      <main className="main_chat">
        <div className="main_chat-img">
          <img src={chatPreviewImg} alt="" srcSet="" />
        </div>
        <div className="message_view">
          <Outlet></Outlet>
        </div>
      </main>
    </>
  );
};
