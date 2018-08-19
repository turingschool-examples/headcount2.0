import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ location, stats, average, selectLocation }) => {
  const statsList = Object.keys(stats).map((year, index) => {
    let statsColor;
    stats[year] > 0.5 ? statsColor = 'green' : statsColor = 'red';
    return <li className={statsColor} key={index}>{year}: {stats[year]}</li>;
  });

  return (
    <article className='Card' onClick={() => selectLocation(location)}>
      <div className='Card__header'>
        <h2>{location}</h2>
      </div>
      <ul className='Card__stats'>
        {statsList}
        <li><span className='Card__average'>AVERAGE:</span> {average}</li>
      </ul>
    </article>
  );
};

export default Card;

Card.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
  average: PropTypes.number,
  selectLocation: PropTypes.func
};