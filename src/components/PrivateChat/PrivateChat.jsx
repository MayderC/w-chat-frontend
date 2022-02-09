import { InputMessage } from "../InputMessagge/InputMessage";
import { TopbarPrivateChat } from "../TopbarPrivateChat/TopbarPrivateChat";
import "./index.scss";

export const PrivateChat = () => {
  return (
    <>
      <TopbarPrivateChat></TopbarPrivateChat>
      <div className="private__main"></div>
      <InputMessage></InputMessage>
    </>
  );
};
