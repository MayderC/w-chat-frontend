import "./index.scss";

export const CButton = ({ text, click }) => {
  return (
    <>
      <input
        type="submit"
        className="c-button"
        value={text}
        onClick={(event) => {
          click(event);
        }}
      ></input>
    </>
  );
};
