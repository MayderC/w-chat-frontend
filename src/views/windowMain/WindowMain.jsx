import React from "react";
import { Route, Routes } from "react-router-dom";
import { AppChatview } from "../../components/AppChatview/AppChatview";
import { AppSidebar } from "../../components/AppSidebar/AppSidebar";
import { AppTopbar } from "../../components/AppTopbar/AppTopbar";
import "./index.scss";

export const WindowMain = () => {
  return (
    <>
      <main className="window-main">
        <div className="topbar">
          <AppTopbar></AppTopbar>
        </div>
        <div className="sidebar">
          <AppSidebar></AppSidebar>
        </div>
        <div className="chat">
          <Routes>
            <Route path="/*" element={<AppChatview></AppChatview>}></Route>
          </Routes>
        </div>
      </main>
    </>
  );
};
