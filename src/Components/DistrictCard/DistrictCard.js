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

  const toggleClass = () => {

  }

  const handleClick = (id) => {
    this.compareCard(id)
  }

  return (
    <section 
      className="card" 
      id={district.key}
      key={district.key}
      onClick={toggleClass}
      onClick={compareCard(district.key)}
    > 
      <h2 className="district">District Name: {district.location}</h2>
      <ul className="stats">
        {createStats}
      </ul>

    </section>
  )
}

DistrictCard.propTypes = { 
  district: PropTypes.object
}



export default DistrictCard;