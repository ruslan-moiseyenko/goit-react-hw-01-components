import React from 'react';
import PropTypes from 'prop-types';
import { Statistics } from './Statistics.jsx';
import styles from './statistics.module.css';


export default function StatsList({ title, stats }) {
  // console.log(stats);
  return (
    <section className={styles.statistics}>
      {title && (<h2 className={styles.title}>{title}</h2>)}
      <ul className={styles.statList}>
        {stats.map(item => (
          <Statistics
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />))}
      </ul>
    </section>
  );
}

StatsList.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object),
}

