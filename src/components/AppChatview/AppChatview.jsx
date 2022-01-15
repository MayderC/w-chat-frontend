import React, { useState } from "react";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import { InputForm } from "../InputForms/InputForm";

export const AppChatview = () => {
  const [Message, setMessage] = useState({ msg: "" });

  return (
    <>
      <main className="main_chat">
        <Routes>
          <Route path="/:id" element={<h1> chat adsffff</h1>}></Route>
        </Routes>
      </main>
    </>
  );
};
