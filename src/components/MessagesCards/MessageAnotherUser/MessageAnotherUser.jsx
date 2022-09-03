import "./index.scss";

export const MessageAnotherUser = ({ prop }) => {
  return (
    <>
      <div className="msg_another_user">
        <p className="username">{prop.username}</p>
        <div className="msg"><p>{prop.message}</p></div>
      </div>
    </>
  );
};
