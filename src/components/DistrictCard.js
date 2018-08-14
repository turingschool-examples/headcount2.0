import React from 'react';
import PropTypes from 'prop-types';
import '../css/DistrictCard.css';

const DistrictCard = ({ location, stats }) => {
  const yearStats = Object.keys(stats).map((yearKey, index) => (
    <p key={`${index}-${yearKey}`}>
      {yearKey} :{' '}
      <span className={stats[yearKey] < 0.5 ? 'subPointFive' : ''}>
        {stats[yearKey]}
      </span>
    </p>
  ));
  return (
    <div className="district-card">
      <h3 className="district-card-title">{location}</h3>
      <div className="district-stats">{yearStats}</div>
    </div>
  );
};

DistrictCard.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
};

export default DistrictCard;
