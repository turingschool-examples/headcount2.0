import React from 'react'
import { DistrictCard } from './DistrictCard'
import './CardContainer.css'

export const CardContainer = ({ districts }) => {
  console.log(districts)
  const districtValues = Object.values(districts)
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