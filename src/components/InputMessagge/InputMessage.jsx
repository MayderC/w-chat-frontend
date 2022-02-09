import "./index.scss";
import { InputForm } from "../InputForms/InputForm";

const handleSetInputValue = () => {};

export const InputMessage = ({ props }) => {
  return (
    <>
      <div className="wrapper_inputmsg">
        <InputForm
          props={{
            handleSetInputValue,
            placeholder: "Ingresa tu mensaje",
          }}
        ></InputForm>
      </div>
    </>
  );
};
