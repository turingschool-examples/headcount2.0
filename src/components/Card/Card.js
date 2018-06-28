import React from 'react';
import PropTypes from 'prop-types';

const Card = props => {
  const { location, stats } = props;

  const districtStats = Object.keys(stats).map(stat => <li key={stat}>{stats[stat]}</li>);

  return (
    <div>
      <h2>{location}</h2>
      <ul>
        {districtStats}
      </ul>
    </div>
  );
};

Card.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
};

export default Card;