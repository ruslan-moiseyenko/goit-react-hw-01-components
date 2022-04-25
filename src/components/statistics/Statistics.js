import React from 'react';
import PropTypes from 'prop-types';
import { Statistics } from './StatisticsItem.jsx';
import styles from './statistics.module.css';


export default function StatsList({ title, stats }) {
  return (
    <section className={styles.statistics}>
      {title && (<h2 className={styles.title}>{title}</h2>)}
      <ul className={styles.statList}>
        {stats.map(({ id, label, percentage }) => (
          <Statistics
            key={id}
            label={label}
            percentage={percentage}
          />))}
      </ul>
    </section>
  );
}

StatsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape({
    percentage: PropTypes.number.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
  })).isRequired,
}

