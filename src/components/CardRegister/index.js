import { useState } from "react";

const initialState = {
  username: "",
  email: "",
  password: "",
  rePassword: "",
};

export const useCardRegister = () => {
  const [inputValues, setInputValues] = useState(initialState);

  const handleSetInputValue = (propertie, value) => {
    console.log(propertie);
    if (Object.keys(initialState).includes(propertie)) {
      setInputValues({ ...inputValues, [propertie]: value });
    }
  };

  const propsInputUsername = {
    type: "text",
    placeholder: "Username",
    propInState: "username",
    handleSetInputValue,
    autofocus: true,
  };

  const propsInputPassword = {
    type: "text",
    placeholder: "Contraseña",
    propInState: "password",
    handleSetInputValue,
    autofocus: false,
  };

  const propsInputRepeatPassword = {
    type: "text",
    placeholder: "Repita su contraseña",
    propInState: "rpassword",
    handleSetInputValue,
    autofocus: false,
  };

  return {
    propsInputUsername,
    propsInputPassword,
    propsInputRepeatPassword,
    inputValues,
  };
};
