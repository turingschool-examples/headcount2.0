import React from 'react'
import Card from './Card'

const CardContainer = ({data}) => {
  const displayCards = data.map((cardData, i) =>
  <Card 
    data={cardData}
    key={i}
  />
  )

  return (
    <div className='card-container'>
      {displayCards}
    </div>
  )
}

export default CardContainer