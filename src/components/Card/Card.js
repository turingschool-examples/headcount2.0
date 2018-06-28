import React from 'react';
import PropTypes from 'prop-types';

import './Card.css';

const Card = props => {
  const { location, stats } = props;

  const districtStats = Object.keys(stats).map(stat => <li className="card-stats" key={stat}>{stats[stat]}</li>);

  return (
    <div className="card">
      <h2 className="card-location">{location}</h2>
      <ul className="card-list">
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