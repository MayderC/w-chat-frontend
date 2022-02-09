import "./index.scss";
import { InputForm } from "../InputForms/InputForm";

export const InputMessage = ({ props }) => {
  const handleSetInputValue = (value) => {
    console.log(value);
  };
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
