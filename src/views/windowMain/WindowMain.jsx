import { Outlet, Link } from "react-router-dom";
import { AppSidebar } from "../../components/AppSidebar/AppSidebar";
import { AppTopbar } from "../../components/AppTopbar/AppTopbar";

import "./index.scss";
import { CardFriendChat } from "../../components/CardFriedChat/CardFriendChat";
import { InputForm } from "../../components/InputForms/InputForm";

export const WindowMain = () => {
  const handleSetInputValue = () => {
    console.log("input");
  };

  const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];

  return (
    <>
      <main className="window-main">
        <div className="topbar"></div>
        <div className="sidebar">
          <AppSidebar>
            <AppTopbar></AppTopbar>
            <div className="sidebar__search__friends">
              <InputForm
                props={{
                  handleSetInputValue,
                  placeholder: "Search a friend",
                }}
              ></InputForm>
            </div>
            <div className="friends__chat_container">
              {test.map((n) => (
                <Link key={n} to="/app/test">
                  <CardFriendChat></CardFriendChat>
                </Link>
              ))}
            </div>
          </AppSidebar>
        </div>
        <div className="chat">
          <Outlet></Outlet>
        </div>
      </main>
    </>
  );
};
