import React from 'react'
import Card from './Card.js'
import './CardContainer.css'

const CardContainer = ({ districts }) => {
  const displayDistricts = Object.keys(districts.stats).map((district, index )=> {
     return <Card      
      location={district} 
      stats={districts.stats[district].stats}
      key={index} />
  })
  return(
    <div className="cardList">
      {displayDistricts}
    </div>
  )
}

export default CardContainer

