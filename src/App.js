import "./assets/sass/index.sass";
import { WindowMain } from "./views/windowMain/WindowMain";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./views/LandingPage/LandingPage";
import { AuthPage } from "./views/AuthPage/AuthPage";

export const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage></LandingPage>}></Route>
          <Route path="/auth" element={<AuthPage></AuthPage>}></Route>
          <Route path="/app/*" element={<WindowMain></WindowMain>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};
