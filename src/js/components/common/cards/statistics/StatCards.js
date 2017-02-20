import React, { PropTypes } from 'react'; // eslint-disable-line no-unused-vars
import StatCard from './StatCard';

const StatCards = ({ stats }) => {
  return (
    <div>
      {Object.keys(stats).map(key => {
        return <StatCard key={key} stat={stats[key]} />
      })}
    </div>
  )
 }

StatCards.propTypes = {
  stats: PropTypes.object
};

export default StatCards;
