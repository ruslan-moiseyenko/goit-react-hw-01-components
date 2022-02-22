// import PropTypes from 'prop-types';
// import styles from './statistics.module.css';

export const Statistics = ({ id, label, percentage }) => {
  //console.log("data ", { data });
  console.log(id, label, percentage);
  return (
    <ul className="stat-list" key={id}>
      <li className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    </ul>
  );
}

// Statistics.propTypes = {
//   title: PropTypes.string,
// }

