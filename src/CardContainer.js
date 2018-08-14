import React from 'react'
import Card from './Card'

const CardContainer = ({districtData}) => { 
  let districtKeys = Object.keys(districtData.stats)

  const displayCards = districtKeys.map(district => {
   return <Card
      location={districtData.stats[district].location}
      stats={Object.entries(districtData.stats[district].stats)}
    />
  })

  return(
    <div>
      <h1>{displayCards}</h1>
    </div>
  )
}

export default CardContainer