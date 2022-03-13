import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';
import getRandomHexColor from './getRandomHexColor';

export const Statistics = ({ label, percentage }) => {
  return (
    <li className={styles.item} style={{ backgroundColor: getRandomHexColor() }}>
      <span className={styles.label}>{label}</span>
      <span className="percentage">{percentage}</span>
    </li>
  );
}

Statistics.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
}

