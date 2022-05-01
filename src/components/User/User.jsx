import React from 'react';
import PropTypes from 'prop-types';
import styles from './User.module.css';


export const User = ({ username, avatar, tag, location, stats }) => {
  const { followers, views, likes } = stats;

  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img
          src={avatar}
          alt="User avatar"
          className={styles.avatar}
        />
        <p className={styles.name}>{username}</p>
        <p className="tag">@{tag}</p>
        <p className={styles.location}>{location}</p>
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
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    stats: PropTypes.shape({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  })
}
