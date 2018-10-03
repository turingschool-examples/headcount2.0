import React from 'react'
import PropTypes from 'prop-types'


import './Card.css'

const Card = ({district}) => {
  const dataPoints = Object.keys(district.data)

  return(
    <div className="card">
      <h3 className="school-name">{district.school}</h3>
      <ul className="school-data">
        {dataPoints.map( year => <li className={district.data[year] < 0.5  ? 'red' : 'green'}>{year} : {district.data[year]} </li>)}
      </ul>
    </div>
  )
}

Card.propTypes = {
  district: PropTypes.shape({
     location: PropTypes.string,
     data: PropTypes.object
  }),
}

export default Card; 