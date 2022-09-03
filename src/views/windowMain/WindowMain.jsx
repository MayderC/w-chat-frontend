import { Outlet, Link } from "react-router-dom";
import { AppSidebar } from "../../components/AppSidebar/AppSidebar";
import { AppTopbar } from "../../components/AppTopbar/AppTopbar";
import { CardFriendChat } from "../../components/CardFriedChat/CardFriendChat";
import { InputForm } from "../../components/InputForms/InputForm";
import "./index.scss";

export const WindowMain = () => {
  const handleSetInputValue = (value) => {};
  const test = [1,2,3,4,5,6];
  return (
    <>
      <main className="window-main">
        <div className="sidebar">
          <AppSidebar>
            <AppTopbar></AppTopbar>
            <div className="sidebar__search__friends">
              <InputForm
                props={{
                  handleSetInputValue,
                  placeholder: "Search a friend",
                  background: "#202c33"
                }}
                ></InputForm>
            </div>
            <div className="friends__chat_container">
              {test.length > 0 &&
                test.map((n) => (
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
