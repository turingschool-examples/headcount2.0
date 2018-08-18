import React from 'react'
import Card from './Card'
import './CardContainer.css'
import PropType from 'prop-types'

const CardContainer = ({ data, selectCards }) => { 
  let districtKeys = Object.values(data)
  
  let displayCards = districtKeys.map((district, index) => {

   return <Card
      key={index}
      location={district.location}
      stats={district.stats}
      selectCards={selectCards}
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