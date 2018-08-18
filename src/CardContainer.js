import React from 'react'
import { DistrictCard } from './DistrictCard'
import './CardContainer.css'

export const CardContainer = ({ districts, selectCard, deleteCard }) => {
  const districtValues = Object.values(districts)
  const displayCards = districtValues.map(district => (
    <DistrictCard
      location={district.location}
      stats={district.stats}
      key={district.id}
      selectCard={ selectCard }
      deleteCard={ deleteCard }
    />
  ))
  
  return (
    <div className="cardContainer">
      { displayCards }
    </div>
  )
}