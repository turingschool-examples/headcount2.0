import React from 'react';
import PropTypes from 'prop-types';
import '../css/DistrictCard.css';

const DistrictCard = ({
  location,
  stats,
  selected,
  toggleSelected,
  category,
  selectedCards
}) => {
  let average;

  if (selected) {
    average = (
      <p>
        AVG :{' '}
        <span
          className={category.findAverage(location) < 0.5 ? 'subPointFive' : ''}
        >
          {category.findAverage(location)}
        </span>
      </p>
    );
  }

  const yearStats = Object.keys(stats).map((yearKey, index) => (
    <p key={`${index}-${yearKey}`}>
      {yearKey} :{' '}
      <span className={stats[yearKey] < 0.5 ? 'subPointFive' : ''}>
        {stats[yearKey]}
      </span>
    </p>
  ));

  return (
    <div
      onClick={() => toggleSelected(location)}
      className={`district-card ${selected ? 'selected' : ''}`}
      style={selectedCards ? { width: '13rem' } : { width: '16rem' }}
    >
      <h3 className="district-card-title">{location}</h3>
      <div className="district-stats">{yearStats}</div>
      {average}
    </div>
  );
};

DistrictCard.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  selected: PropTypes.bool.isRequired,
  toggleSelected: PropTypes.func.isRequired,
  category: PropTypes.object.isRequired,
  selectedCards: PropTypes.bool.isRequired
};

export default DistrictCard;
