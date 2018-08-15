import React from 'react'
import Card from './Card'
import './CardContainer.css'

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

export default CardContainer