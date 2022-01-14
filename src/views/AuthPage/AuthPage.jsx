import { useState } from "react";
import "./index.scss";
import { CardRegister } from "../../components/CardRegister/CardRegister";
import { CardLogin } from "../../components/CardLogin/CardLogin";
import imgAuth from "../../assets/img/auth.svg";

export const AuthPage = () => {
  const [isRegister, setIsRegister] = useState(true);

  const handleClick = () => {
    setIsRegister(!isRegister);
  };

  return (
    <>
      <main className="main-auth">
        <div className="auth-forms">
          <div className="auth-items item--img">
            <img src={imgAuth} alt="" />
          </div>
          <div className="auth-items item--form">
            <div className="navegation-auth">
              <div className="navegation-item">
                <span
                  className={`item-login ${isRegister && "current-form"}`}
                  onClick={handleClick}
                >
                  Login
                </span>
                <span> &nbsp; | &nbsp; </span>
                <span
                  className={`item-register ${!isRegister && "current-form"}`}
                  onClick={handleClick}
                >
                  Register
                </span>
              </div>
            </div>
            {isRegister ? <CardLogin /> : <CardRegister />}
          </div>
        </div>
      </main>
    </>
  );
};
