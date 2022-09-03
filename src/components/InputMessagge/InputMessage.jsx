import { useState } from "react";
import { InputForm } from "../InputForms/InputForm";
import "./index.scss";
import { useContext } from "react";
import { socketContext } from "../../context/socket/SocketContext";

export const InputMessage = ({ props }) => {
  const [Message, setMessage] = useState({ msg: "" });
  const { socket } = useContext(socketContext);
  const handleSetInputValue = (target, value) => {
    setMessage({ msg: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    
    socket.emit("send-message", Message, (msg) => {
      props.handleSetnewMessage(msg);
    });
    setMessage({ msg: "" });
  };

  return (
    <>
      <form
        className="form_input_message"
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <div className="wrapper_inputmsg">
          <InputForm
            props={{
              value: Message.msg,
              handleSetInputValue,
              propInState: "msg",
              placeholder: "Ingresa tu mensaje",
            }}
          ></InputForm>
        </div>
      </form>
    </>
  );
};
