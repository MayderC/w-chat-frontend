import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { InputForm } from "../InputForms/InputForm";
import { CButton } from "../CButton/CButton";
import { register } from "../../api/auth";
import { Context } from "../../context/Context";
import { setItemLocalStorage } from "../../helpers/useLocalStorage";
import "./index.scss";

const initialState = {
  username: "",
  password: "",
  rpassword: "",
};

export const CardRegister = () => {
  const [inputValues, setInputValues] = useState(initialState);
  const [buttonText, setButtonText] = useState("Registrarme");
  const { setToken, setProfile } = useContext(Context);
  const navigate = useNavigate();
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
    setButtonText("Cargando...");
    const resp = await register(user);

    setToken(resp.data.token);
    setProfile(resp.data.user);

    setItemLocalStorage("token", resp.data.token);

    navigate("/app");
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
