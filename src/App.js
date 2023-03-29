import { useEffect, useContext } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { WindowMain } from "./views/windowMain/WindowMain";
import { LandingPage } from "./views/LandingPage/LandingPage";
import { AuthPage } from "./views/AuthPage/AuthPage";
import { AppChatview } from "./components/AppChatview/AppChatview";
import { PrivateChat } from "./components/PrivateChat/PrivateChat";
import { getToken, clearLocalStorage } from "./helpers/useLocalStorage";
import { verify } from "./api/auth";
import { Context } from "./context/Context";
import { SocketProvider } from "./context/socket/SocketProvider";
import "./assets/sass/index.sass";
import { AppRefProvider } from "./context/appRef/AppRefProvider";

export const App = () => {
  const navigate = useNavigate();
  const context = useContext(Context);

  useEffect(() => {
    const token = getToken();
    console.log({ token });
    if (!token) {
      navigate("/");
    }
    if (token) {
      verify(token).then((res) => {
        if (res.username) {
          context.setToken(token);
          context.setProfile({ ...res });
          navigate("/app");
        } else {
          navigate("/auth");
          clearLocalStorage();
        }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage></LandingPage>}></Route>
        <Route path="/auth" element={<AuthPage></AuthPage>}></Route>

        <Route
          path="/app"
          element={
            <SocketProvider>
              <AppRefProvider>
                <WindowMain />
              </AppRefProvider>
            </SocketProvider>
          }
        >
          <Route index element={<AppChatview></AppChatview>}></Route>
          <Route path="global" element={<PrivateChat></PrivateChat>}></Route>
          <Route path="chat" element={<PrivateChat></PrivateChat>}></Route>
        </Route>
      </Routes>
    </div>
  );
};
