import React from 'react'
import './ComparedCard.css'
import PropTypes from 'prop-types'

const ComparedCard = ( { firstDistrict, compared, secondDistrict, firstDistrictName, secondDistrictName } ) => {
  console.log('hey')
  return (
    <div className="comparedCard">
      <h2>{firstDistrictName}</h2>
      <h5>{firstDistrict}</h5>
      <h2>{compared}</h2>
      <h2>{secondDistrict}</h2>
      <h2>{secondDistrictName}</h2>
    </div>
  )
}

ComparedCard.propTypes = { 
  firstDistrict: PropTypes.number,
  compared: PropTypes.number,
  secondDistrict: PropTypes.number,
  firstDistrictName: PropTypes.string,
  secondDistrictName: PropTypes.string
}


export default ComparedCard