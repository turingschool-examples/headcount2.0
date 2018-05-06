import React from 'react';
import '../styles/Card.css';
import PropTypes from 'prop-types';

const Card = ({ location, stats, selected, setSelectedCard}) => {
  let statKeys = Object.keys(stats)
  console.log(selected)
  const districtStats = statKeys.map(year => {
    return  <li className={stats[year] < 0.5 ? "below": ""} >{year}: <span>{stats[year]}</span></li>
  });

  return (
    <article className={"card " + (selected ? "selected": "")}  onClick={() => setSelectedCard(location)}>
      <h2>{location}</h2>
      <hr />
      <ul>
        {districtStats}
      </ul>
    </article>
  )
}

Card.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.string.isRequired,
  setSelectedCard: PropTypes.func.isRequired,
  selected: PropTypes.array.isRequired
}

export default Card;

