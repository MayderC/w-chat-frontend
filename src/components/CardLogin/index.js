import { useState, useContext } from "react";
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

  const handleSetInputValue = (propertie, value) => {
    if (Object.keys(inputsValue).includes(propertie)) {
      setInputsValue({ ...inputsValue, [propertie]: value });
    }
  };

  const handleClickCButton = async (event) => {
    event.preventDefault();
    const response = await login(inputsValue);

    if (response?.msg) {
      return;
    }

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

  return { propsPasswordInput, propsUsernameInput, handleClickCButton };
};
