import React from 'react';
import './DistrictCard.css';
import PropTypes from 'prop-types';

const DistrictCard = ({district}) => {
  const years = Object.keys(district.stats)

  const determineColor = (stats) => {
    return stats > 0.5 ? "highStats" : "lowStats"
  }

  const createStats = years.map(year => {
    const stats = district.stats[year]

    return (
      <li className={determineColor(stats)}>
        {[year]}: {stats}
      </li>
      )
  })

  return (
    <section className="card"> 
      <h2>District Name: {district.location}</h2>
      <ul>
        {createStats}
      </ul>

    </section>
  )
}

DistrictCard.propTypes = { 
  district: PropTypes.object
}



export default DistrictCard;