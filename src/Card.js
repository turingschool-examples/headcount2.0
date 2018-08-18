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
      <h2 className='Card__header'> {location}</h2>
      <ul className='Card__stats'>
        {statsList}
        <li>AVERAGE: {average}</li>
      </ul>
    </article>
  );
};

export default Card;

Card.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
  average: PropTypes.number
};