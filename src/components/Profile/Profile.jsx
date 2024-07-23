import s from "./Profile.module.css"

const Profile = (props) => {
  return (
    <div className={s.profile}>
      <div>
        <img className={s.img} src={props.image} alt="User avatar" />
        <p className={s.name}>{props.name}</p>
        <p className={s.tag}>@{props.tag}</p>
        <p className={s.location}>{props.location}</p>
      </div>
      <ul className={s.bottom}>
        <li className={s.stat}>
          <span>Followers</span>
          <span>{props.stats.followers}</span>
        </li>
        <li className={s.stat}>
          <span>Views</span>
          <span>{props.stats.views}</span>
        </li>
        <li className={s.stat}>
          <span>Likes</span>
          <span>{props.stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
