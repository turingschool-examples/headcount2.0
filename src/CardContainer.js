import React from 'react'
import { DistrictCard } from './DistrictCard'

export const CardContainer = (districts, id) => {
  const districtValues = Object.values(districts.districts)
  const displayCards = districtValues.map(district => (
    <DistrictCard 
      location={district.location}
      stats={district.stats}
      key={id}
  />))
  
  return (
    <div>
      {displayCards}
    </div>
  )
}