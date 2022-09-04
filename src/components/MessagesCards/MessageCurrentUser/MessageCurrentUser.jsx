import "./index.scss";

export const MessageCurrentUser = ({ prop }) => {
  return (
    <>
      <div className="msg_current_user">
        <div className="msg">
          <p className="text-msg">{prop.message}</p>
        </div>
      </div>
    </>
  );
};
