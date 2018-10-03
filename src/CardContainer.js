import React from 'react'

import Card from './Card.js'
import PropTypes from 'prop-types'

const CardContainer = ({districts}) => {  
  const districtCards = districts.map( district => <Card district={district} />)
  return (
    <div className="cardContainer">
      { districtCards }
    </div>  
  )
}

CardContainer.propTypes = {

}

export default CardContainer; 