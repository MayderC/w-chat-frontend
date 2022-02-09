import "./index.scss";
import profileImg from "../../assets/img/user.png";

export const CardFriendChat = () => {
  return (
    <>
      <div className="card__friendchat">
        <div className="card__img">
          <img src={profileImg} alt="" />
        </div>
        <div className="card__info">
          <p className="name">Username</p>
          <p className="message_preview">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda
            consequuntur iusto
          </p>
          <p className="message_date">Ayer</p>
        </div>
      </div>
    </>
  );
};
