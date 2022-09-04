import { useContext } from "react";
import { Outlet, Link } from "react-router-dom";
import chatPreviewImg from "../../assets/img/chatpreview.svg";
import { InputMessage } from "../InputMessagge/InputMessage";
import "./index.scss";
import {Context as refCtx} from '../../context/appRef/appRefContext'
export const AppChatview = () => {
  const {myRef} = useContext(refCtx);
  const handleClick = () => myRef.classList.remove('hide')
  return (
    <>
      <main className="main_chat">
        <div className="main_chat-img">
          <span  onClick={handleClick}>click</span>
          <img src={chatPreviewImg} alt="" srcSet="" />
          <Link className="join_global" to="/app/global">
            Join global chat
          </Link>
        </div>

        <div className="message_view">
          <Outlet></Outlet>
          <div className="message_input">
            <InputMessage></InputMessage>
          </div>
        </div>
      </main>
    </>
  );
};
