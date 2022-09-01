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
          <img src={profileDefault} alt=""/>
        </div>
        <p>{context.PROFILE.username}</p>
      </nav>
    </>
  );
};
