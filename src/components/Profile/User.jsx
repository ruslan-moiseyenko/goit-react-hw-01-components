import PropTypes from 'prop-types';
import styles from './Profile.module.css';



export const User = ({ avatar, tag, location, followers, views, likes }) => {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>Petra Marica</p>
        <p className="tag">@{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className={styles.stats}>
        <li>
          <span className="label">Followers</span>
          <span className={styles.quantity}>{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className={styles.quantity}>{views}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className={styles.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

User.propTypes = {
  avatar: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
