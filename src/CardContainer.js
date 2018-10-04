import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card.js'
import './CardContainer.css'

const CardContainer = ({districts, addCompareSelections}) => {  
  const districtCards = districts.map( district => <Card district={district} addCompareSelections={addCompareSelections}/>)
  return (
    <div className="card-container">
      { districtCards }
    </div>  
  )
}

CardContainer.propTypes = {
  districts: PropTypes.arrayOf(PropTypes.object)
}

export default CardContainer; 