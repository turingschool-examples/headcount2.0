import React from 'react'
import Card from './Card'
import './CardContainer.css'
import PropType from 'prop-types'

const CardContainer = ({ data, selectCards, selected }) => { 
  const districtKeys = Object.values(data)
  
  const displayCards = districtKeys.map((district, index) => {

   return <Card
      key={index}
      location={district.location}
      stats={district.stats}
      selectCards={selectCards}
      selected={ false }
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