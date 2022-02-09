import { CButton } from "../CButton/CButton";
import { InputForm } from "../InputForms/InputForm";

import { UseCardLogin } from "./index";
import "./index.scss";

export const CardLogin = () => {
  const { propsPasswordInput, propsUsernameInput, handleClickCButton } =
    UseCardLogin();

  return (
    <>
      <section>
        <form className="card-login">
          <h2>Iniciar Sesion</h2>
          <InputForm props={propsUsernameInput}></InputForm>
          <InputForm props={propsPasswordInput}></InputForm>
          <CButton click={handleClickCButton} text="Login"></CButton>
        </form>
      </section>
    </>
  );
};
