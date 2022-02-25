import "./index.scss";

export const MessageCurrentUser = ({ prop }) => {
  return (
    <>
      <div className="msg_current_user">
        <p className="username">Me : {prop.username}</p>
        <p className="msg">{prop.message}</p>
      </div>
    </>
  );
};
