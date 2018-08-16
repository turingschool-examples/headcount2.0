import React from 'react'
import './DistrictCard.css'

export const DistrictCard = ({location, stats, id}) => {
  const displayStats = Object.entries(stats).map((stat) => {
    return  <li key={id} className={stat[1] > .5 ? "statGreater" : "statLesser"}>{stat[0]}: {stat[1]}</li>})

  return (
    <div className="districtCard">
      <h1 className="districtLocation">{location}</h1>
      <ul className="districtStats">{displayStats}</ul>
    </div>
  )
}