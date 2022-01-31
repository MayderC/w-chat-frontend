import "./index.scss";

export const InputMessage = ({ props }) => {
  const { handleSetInputValue } = props;

  return (
    <>
      <div className="wrapper_inputmsg">
        <input onChange={handleSetInputValue} type="text" name="" id="" />
      </div>
    </>
  );
};
