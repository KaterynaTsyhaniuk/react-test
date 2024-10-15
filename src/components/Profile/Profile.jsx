import css from "./Profile.module.css";

export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={css.profileBox}>
      <div className={css.profileMainBox}>
        <img className={css.profileIcon} src={image} alt="User avatar" />
        <p className={css.profileName}>{name}</p>
        <p className={css.profileDescription}>@{tag}</p>
        <p className={css.profileDescription}>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileItem}>
          <span className={css.profileInfo}>Followers</span>
          <span className={css.profileInfoStat}>{stats.followers}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileInfo}>Views</span>
          <span className={css.profileInfoStat}>{stats.views}</span>
        </li>
        <li className={css.profileItem}>
          <span className={css.profileInfo}>Likes</span>
          <span className={css.profileInfoStat}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
