import css from "./FriendlistItem.module.css";
import clsx from "clsx";
const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={css.friendCard}>
      <img src={avatar} alt="Avatar" width="48" className="friend-avatar" />
      <p className={css.friendName}>{name}</p>
      <p className={clsx(css.status, isOnline ? css.online : css.offline)}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </div>
  );
};
export default FriendListItem;
