import React from 'react';
import './card.css'
import PropTypes from 'prop-types';

const Card = ({location, stats}) => {

  const yearsArray = Object.keys(stats);

  const districtData = yearsArray.map((year, index) => { return <p key={index}><span className="year">{year}</span>: {stats[year]}</p>})

  return(
    <div className="card-div">
    <h2 className="location">{location}</h2>
    <h3 className="district-data">{districtData}</h3>
    </div>
  )
}

Card.propTypes = {
  stats: PropTypes.object
}

export default Card;
