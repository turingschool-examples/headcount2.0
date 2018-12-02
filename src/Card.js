import React from 'react'
import PropTypes from 'prop-types'

import './Card.css'

const Card = ({district, addCompareSelections}) => {
  const dataPoints = Object.keys(district.data)
  return (
    <div className="card" 
         onClick={(e) => (addCompareSelections(e))}>
      <div className="name-wrapper">
        <h3 className="school-name">{district.school}</h3>
      </div> 
      <ul className="school-data">
        {dataPoints.map( (year, i) => <li 
          key={i + Date.now()}
          className={district.data[year] < 0.5  ? 'red' : 'green'}>{year}: {district.data[year]} </li>)}
      </ul>
    </div>
  )
}

Card.propTypes = {
  district: PropTypes.shape({
     location: PropTypes.string,
     data: PropTypes.object
  }),
  addCompareSelections: PropTypes.func
}

export default Card; 