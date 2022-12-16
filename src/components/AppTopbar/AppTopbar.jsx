import { useContext } from "react";
import { Context } from "../../context/Context";
import  profileDefault from '../../assets/img/user.png'
import "./index.scss";
import {Context as refCtx} from '../../context/appRef/appRefContext'
import chatImg from '../../assets/img/chat.png'


export const AppTopbar = () => {
  const context = useContext(Context);
  const {myRef} = useContext(refCtx);


  const handleClick = () => myRef.classList.add('hide')
  


  

  return (
    <>
      <nav className="topbar_chat">
        <div className="profile-container">
          <div className="profile-item-img"><img src={profileDefault} alt=""/></div>
          <div className="profile-item-name"><p>{context.PROFILE.username}</p></div>
        </div>
        <div className="toggle-chat" onClick={handleClick}>
          <img src={chatImg} alt="" />
        </div>
      </nav>
    </>
  );
};
