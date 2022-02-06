import { useState } from "react";
import { CButton } from "../CButton/CButton";
import { InputForm } from "../InputForms/InputForm";
import { login } from "../../api/auth";
import "./index.scss";

export const CardLogin = () => {
  const [inputsValue, setInputsValue] = useState({
    username: "",
    password: "",
  });

  const handleSetInputValue = (propertie, value) => {
    if (Object.keys(inputsValue).includes(propertie)) {
      setInputsValue({ ...inputsValue, [propertie]: value });
    }
  };

  const handleClickCButton = async (event) => {
    event.preventDefault();

    const user = {
      username: inputsValue.username,
      password: inputsValue.password,
    };

    const resp = await login(user);
    console.log(resp);
  };

  return (
    <>
      <section>
        <form className="card-login">
          <h2>Iniciar Sesion</h2>

          <InputForm
            props={{
              placeholder: "Username",
              type: "text",
              propInState: "username",
              handleSetInputValue,
              autofocus: true,
            }}
          ></InputForm>

          <InputForm
            props={{
              placeholder: "Contraseña",
              type: "password",
              propInState: "password",
              handleSetInputValue,
              autofocus: false,
            }}
          ></InputForm>

          <CButton click={handleClickCButton} text="Login"></CButton>
        </form>
      </section>
    </>
  );
};
