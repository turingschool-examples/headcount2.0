import React from 'react'
import { DistrictCard } from './DistrictCard'
import './CardContainer.css'

export const CardContainer = (districts) => {
  const districtValues = Object.values(districts.districts.stats)
  const displayCards = districtValues.map(district => (
    <DistrictCard 
      location={district.location}
      stats={district.stats}
    />
  ))
  
  return (
    <div className="cardContainer">
      { displayCards }
    </div>
  )
}