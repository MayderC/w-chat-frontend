import React from "react";
import "./index.scss";

export const AppSidebar = ({ children }) => {

  return (
    <>
      <aside className="sidebar_chat">{children}</aside>
    </>
  );
};
