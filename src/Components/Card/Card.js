import React from 'react';
import './card.css'
import PropTypes from 'prop-types';

const Card = ({location, stats}) => {

  const yearsArray = Object.keys(stats);

  const districtData = yearsArray.map((year, index) => { return <p className={stats[year] > 0.5 ? 'above50' : 'below50' }
  key={index}>
  <span className="year">{year}: </span>
  {stats[year]}</p>})

  return(
    <div className="card-div">
    <section className="info-section">
    <h2 className="location">{location}</h2>
    <h3 className="district-data">{districtData}</h3>
    </section>
    </div>
  )
}

Card.propTypes = {
  stats: PropTypes.object
}

export default Card;
