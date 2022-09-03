import { useContext } from "react";
import { Context } from "../../context/Context";
import  profileDefault from '../../assets/img/user.png'
import "./index.scss";

export const AppTopbar = () => {
  const context = useContext(Context);

  return (
    <>
      <nav className="topbar_chat">
        <div className="profile-container">
          <div className="profile-item-img"><img src={profileDefault} alt=""/></div>
          <div className="profile-item-name"><p>{context.PROFILE.username}</p></div>
        </div>
        <div className="toggle-chat">click</div>
      </nav>
    </>
  );
};
