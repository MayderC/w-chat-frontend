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
import "./assets/sass/index.sass";

export const App = () => {
  const navigate = useNavigate();
  const context = useContext(Context);

  useEffect(() => {
    const token = getToken();
    if (!token) {
      navigate("/");
    }

    if (token) {
      verify(token).then((res) => {
        if (res.msg === "Error") {
          navigate("/auth");
          clearLocalStorage();
        } else {
          context.setToken(token);
          context.setProfile({ ...res });
          navigate("/app");
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
        <Route path="/app/*" element={<WindowMain></WindowMain>}>
          <Route index element={<AppChatview></AppChatview>}></Route>
          <Route path=":id" element={<PrivateChat></PrivateChat>}></Route>
        </Route>
      </Routes>
    </div>
  );
};
