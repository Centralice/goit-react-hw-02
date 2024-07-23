import FriendListItem from "./FriendListItem";
import s from "./FriendList.module.css";

const FriendList = (props) => {
  return (
    <ul className={s.list}>
      {props.friends.map((friend) => (
        <FriendListItem
          friend={friend}
        />
      ))}
    </ul>
  );};

export default FriendList;
