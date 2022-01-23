import { useState } from "react";

export const UseCardLogin = () => {
  const initialSatate = {
    username: "",
    password: "",
  };

  const [inputsValue, setInputsValue] = useState(initialSatate);

  const handleSetInputValue = (propertie, value) => {
    if (Object.keys(inputsValue).includes(propertie)) {
      const newState = { ...inputsValue };
      newState[propertie] = value;
      setInputsValue(newState);
    }
  };

  const handleClickCButton = (event) => {
    event.preventDefault();
  };

  const propsPasswordInput = {
    placeholder: "Contraseña",
    type: "password",
    propInState: "password",
    handleSetInputValue,
    autofocus: false,
  };

  const propsUsernameInput = {
    placeholder: "Username",
    type: "text",
    propInState: "username",
    handleSetInputValue,
    autofocus: true,
  };

  return { propsPasswordInput, propsUsernameInput, handleClickCButton };
};
