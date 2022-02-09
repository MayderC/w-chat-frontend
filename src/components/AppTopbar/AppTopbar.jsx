import { useContext } from "react";
import { Context } from "../../context/Context";
import "./index.scss";

export const AppTopbar = () => {
  const context = useContext(Context);

  return (
    <>
      <nav className="topbar_chat">
        <p>{context.PROFILE.username}</p>
      </nav>
    </>
  );
};
