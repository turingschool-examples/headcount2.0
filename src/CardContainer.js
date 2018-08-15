import React from 'react'
import Card from './Card'
import './CardContainer.css'
import PropType from 'prop-types'

const CardContainer = ({ data }) => { 
  let districtKeys = Object.values(data)
  
  let displayCards = districtKeys.map(district => {

   return <Card
      location={district.location}
      stats={district.stats}
    />
  })

  return(
    <div className="cardContainer">
      {displayCards}
    </div>
  )
}

CardContainer.propTypes = {
  data: PropType.array.isRequired,  
  displayCards: PropType.func
}

export default CardContainer