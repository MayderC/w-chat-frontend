import React, { useState } from "react";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import { InputMessage } from "../InputMessagge/InputMessage";

export const AppChatview = () => {
  return (
    <>
      <main className="main_chat">
        <div className="message_view">
          <Routes>
            <Route path="/:id" element={<h1> chat adsffff</h1>}></Route>
          </Routes>
        </div>
        <div className="message_input">
          <InputMessage></InputMessage>
        </div>
      </main>
    </>
  );
};
