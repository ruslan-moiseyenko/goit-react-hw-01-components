import Statistics from './Statistics.jsx';

export default function StatList({ title, stats }) {
  console.log(title);
  return (
    <section className="statistics">
      {title && (<h2 className="title">{title}</h2>)}
      <ul className="stat-list">
        {stats.map(item => (
          <Statistics
            id={item.id}
            label={item.label}
            percentage={item.percentage}
          />))}
      </ul>
    </section>
  );
}
