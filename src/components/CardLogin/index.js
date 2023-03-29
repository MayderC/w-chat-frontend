import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../api/auth";
import { Context } from "../../context/Context";
import { setItemLocalStorage } from "../../helpers/useLocalStorage";

export const UseCardLogin = () => {
  const initialSatate = {
    username: "",
    password: "",
  };

  const navigate = useNavigate();

  const context = useContext(Context);
  const [inputsValue, setInputsValue] = useState(initialSatate);
  const [btnText, setBtnText] = useState("Login");

  const handleSetInputValue = (property, value) => {
    if (Object.keys(inputsValue).includes(property)) {
      setInputsValue({ ...inputsValue, [property]: value });
    }
  };

  const handleClickCButton = async (event) => {
    event.preventDefault();
    console.log("login");
    setBtnText("Cargando..");
    const response = await login(inputsValue);
    console.log(response);
    if (response?.msg) {
      setBtnText("Error");

      setTimeout(() => {
        setBtnText("Login");
      }, 1200);

      return;
    }

    setBtnText("Login");
    context.setToken(response.data.token);
    setItemLocalStorage("token", response.data.token);
    context.setProfile(response.data.user);
    navigate("/app/");
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

  return {
    propsPasswordInput,
    propsUsernameInput,
    handleClickCButton,
    btnText,
  };
};
