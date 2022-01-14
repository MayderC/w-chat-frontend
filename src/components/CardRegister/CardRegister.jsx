import { useState } from "react";
import { InputForm } from "../InputForms/InputForm";
import { CButton } from "../CButton/CButton";
import "./index.scss";

const initialState = {
  username: "",
  email: "",
  password: "",
  rePassword: "",
};

export const CardRegister = () => {
  const [inputValues, setInputValues] = useState(initialState);

  const handleSetInputValue = (propertie, value) => {
    if (Object.keys(initialState).includes(propertie)) {
      const newState = { ...initialState };
      newState[propertie] = value;
      setInputValues(newState);
    }
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
            }}
          ></InputForm>

          <InputForm
            props={{
              type: "text",
              placeholder: "@email",
              propInState: "email",
              handleSetInputValue,
            }}
          ></InputForm>

          <InputForm
            props={{
              type: "text",
              placeholder: "Contraseña",
              propInState: "password",
              handleSetInputValue,
            }}
          ></InputForm>

          <CButton text="Registarme"></CButton>
        </form>
      </section>
    </>
  );
};
