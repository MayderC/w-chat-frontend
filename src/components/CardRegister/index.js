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
    if (Object.keys(initialState).includes(propertie)) {
      const newState = { ...inputValues };
      newState[propertie] = value;
      setInputValues(newState);
    }
  };

  const handleClick = (event) => {
    event.preventDefault();
  };

  const propsInputEmail = {
    type: "text",
    placeholder: "@email",
    propInState: "email",
    handleSetInputValue,
    autofocus: false,
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

  return {
    propsInputEmail,
    propsInputUsername,
    propsInputPassword,
    handleClick,
  };
};
