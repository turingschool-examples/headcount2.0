import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card.js'
import './CardContainer.css'

const CardContainer = ({districts, addCompareSelections}) => {  
  const districtCards = districts.map( (district, i) => <Card district={district} addCompareSelections={addCompareSelections} key={i + Date.now()}/>)
  return (
    <div className="card-container">
      { districtCards }
    </div>  
  )
}

CardContainer.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object),
  addCompareSelections: PropTypes.func
}

export default CardContainer; 