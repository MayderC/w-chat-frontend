import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InputForm } from "../InputForms/InputForm";
import { CButton } from "../CButton/CButton";
import { register } from "../../api/auth";
import { Context } from "../../context/Context";
import { setItemLocalStorage } from "../../helpers/useLocalStorage";
import { useCardRegister } from "./index";
import "./index.scss";

export const CardRegister = () => {
  const [buttonText, setButtonText] = useState("Registrarme");
  const { setToken, setProfile } = useContext(Context);
  const navigate = useNavigate();

  const {
    propsInputPassword,
    propsInputUsername,
    //propsInputRepeatPassword,
    inputValues,
  } = useCardRegister();

  const handleClick = async (event) => {
    event.preventDefault();
    const user = {
      username: inputValues.username,
      password: inputValues.password,
    };

    setButtonText("Cargando...");
    const resp = await register(user);
    setButtonText("Registrarme");
    if (resp.msg || !resp) return;

    setToken(resp.data.token);
    setProfile(resp.data.user);
    setItemLocalStorage("token", resp.data.token);
    navigate("/app");
  };

  return (
    <>
      <section>
        <form className="card-register">
          <h2>Registrarse</h2>
          <InputForm props={propsInputUsername}></InputForm>
          <InputForm props={propsInputPassword}></InputForm>
          <CButton click={handleClick} text={buttonText}></CButton>
        </form>
      </section>
    </>
  );
};
