import React from 'react';
import './DistrictCard.css';
import PropTypes from 'prop-types';


const DistrictCard = ({district , selectDistrict}) => {
  const years = Object.keys(district.stats)

  const determineColor = (stats) => {
    return stats > 0.5 ? "highStats" : "lowStats"
  }

  const createStats = years.map((year, index) => {
    const stats = district.stats[year]

    return (
      <li className={determineColor(stats)}
          key={index}
      >
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
      className={`card ${district.selected ? 'selected' : ''}`} 
      id={district.key}
      key={district.key}
      onClick={selectDistrict(district.location)}
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