import React from 'react';
import './styles/card.css';
import PropTypes from 'prop-types'

export const Card = ({data, location}) => {
  const years = Object.keys(data).map(year => {
    let roundedPerc = parseFloat(data[year].toFixed(2));
    if (roundedPerc < 0.5) {
      return <p key={year}>{year}: {roundedPerc}</p>
    } else {
      return <p key={year} className="goodSchool">{year}: {roundedPerc}</p>
    }
      
    })
  return (
    <div className="card">
      <h2>{location}</h2>
      {years}
    </div>
  )

}

Card.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.string.isRequired
}