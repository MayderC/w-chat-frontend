import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { InputMessage } from "../InputMessagge/InputMessage";
import "./index.scss";

export const AppChatview = () => {
  const [Message, setMessage] = useState({ msg: "" });

  const handleSetInputValue = ({ target }) => {
    setMessage({ ...Message, msg: target.value });
  };

  return (
    <>
      <main className="main_chat">
        <div className="message_view">
          <Routes>
            <Route path="/:id" element={<h1> chat adsffff</h1>}></Route>
          </Routes>
        </div>
        <div className="message_input">
          <button>file</button>
          <button>emoji</button>
          <InputMessage props={{ handleSetInputValue }}></InputMessage>
          <button>Enviar</button>
        </div>
      </main>
    </>
  );
};
