import s from "./FriendListItem.module.css";

const FriendListItem = ({friend}) => {
  return (
    <li className={s.profile} key={friend.id}>
      <div>
        <img className={s.img} src={friend.avatar} alt="Avatar" width="48" />
        <p>{friend.name}</p>
        <p className={friend.isOnline ? s.online : s.offline}>
          {friend.isOnline ? `Online` : `Offline`}
        </p>
      </div>
    </li>
  );
};

export default FriendListItem;
