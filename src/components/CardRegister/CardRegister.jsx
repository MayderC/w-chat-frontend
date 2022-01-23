import { useState } from "react";
import { InputForm } from "../InputForms/InputForm";
import { CButton } from "../CButton/CButton";
import "./index.scss";
import { useCardRegister } from "./index";

export const CardRegister = () => {
  const {
    propsInputEmail,
    propsInputPassword,
    propsInputUsername,
    handleClick,
  } = useCardRegister();

  return (
    <>
      <section>
        <form className="card-register">
          <h2>Registarse</h2>
          <InputForm props={propsInputUsername}></InputForm>
          <InputForm props={propsInputEmail}></InputForm>
          <InputForm props={propsInputPassword}></InputForm>
          <CButton click={handleClick} text="Registarme"></CButton>
        </form>
      </section>
    </>
  );
};
