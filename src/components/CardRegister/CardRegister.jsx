import { useState } from "react";
import { InputForm } from "../InputForms/InputForm";
import { CButton } from "../CButton/CButton";
import { register } from "../../api/auth";
import "./index.scss";

const initialState = {
  username: "",
  password: "",
  rpassword: "",
};

export const CardRegister = () => {
  const [inputValues, setInputValues] = useState(initialState);
  const [buttonText, setButtonText] = useState("Registrarme");

  const handleSetInputValue = (propertie, value) => {
    if (Object.keys(initialState).includes(propertie)) {
      setInputValues({ ...inputValues, [propertie]: value });
    }
  };

  const handleClick = async (event) => {
    event.preventDefault();

    const user = {
      username: inputValues.username,
      password: inputValues.password,
    };

    const resp = await register(user);
    console.log(resp);
  };

  return (
    <>
      <section>
        <form className="card-register">
          <h2>Registarse</h2>
          <InputForm
            props={{
              type: "text",
              placeholder: "Username",
              propInState: "username",
              handleSetInputValue,
              autofocus: true,
            }}
          ></InputForm>

          <InputForm
            props={{
              type: "text",
              placeholder: "Contraseña",
              propInState: "password",
              handleSetInputValue,
              autofocus: false,
            }}
          ></InputForm>
          <InputForm
            props={{
              type: "text",
              placeholder: "Repite la contraseña",
              propInState: "rpassword",
              handleSetInputValue,
              autofocus: false,
            }}
          ></InputForm>

          <CButton click={handleClick} text="Registarme"></CButton>
        </form>
      </section>
    </>
  );
};
