import React from "react";
import { Route, Routes } from "react-router-dom";
import "./index.scss";

export const WindowMain = () => {
  return (
    <>
      <main className="window-main">
        <h1>top bar</h1>

        <Routes>
          <Route path="/chat" element={<h1>chat</h1>}></Route>
        </Routes>
      </main>
    </>
  );
};
