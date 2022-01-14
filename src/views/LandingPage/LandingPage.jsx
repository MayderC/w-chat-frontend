import React from "react";
import imgHome from "../../assets/img/HomeChat.svg";
import { useNavigate, NavLink } from "react-router-dom";
import "./index.scss";

export const LandingPage = () => {
  return (
    <>
      <main className="landing">
        <div className="landing_item">
          <div className="landing_text">
            <h1>My chat</h1>
            <p>Aplicacion de mensajeria por internet</p>
            <p>esta app fue desarrollada con fines de apredizaje...</p>
            <NavLink className="landing_start" to="/auth">
              get start
            </NavLink>
          </div>
        </div>
        <div className="landing_item item--img">
          <img src={imgHome} alt="" />
        </div>
      </main>
    </>
  );
};
