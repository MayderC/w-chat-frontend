import "./index.scss";
import { useState } from "react";

export const InputForm = ({ props }) => {
  const [IsFocus, setIsFocus] = useState(false);

  const { handleSetInputValue, propInState } = props;

  return (
    <>
      <div className={`input__form--border ${IsFocus ? "input__focus" : ""}`}>
        <label htmlFor=""></label>
        <input
          onFocus={() => {
            setIsFocus(!IsFocus);
          }}
          onBlur={() => {
            setIsFocus(!IsFocus);
          }}
          onChange={(event) =>
            handleSetInputValue(propInState, event.target.value)
          }
          type={props.type}
          placeholder={props.placeholder}
          autoFocus={props.autofocus}
        />
      </div>
    </>
  );
};
