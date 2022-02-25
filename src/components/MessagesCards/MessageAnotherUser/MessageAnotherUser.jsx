import "./index.scss";

export const MessageAnotherUser = ({ prop }) => {
  return (
    <>
      <div className="msg_another_user">
        <p className="username">{prop.username}</p>
        <p className="msg">{prop.message}</p>
      </div>
    </>
  );
};
