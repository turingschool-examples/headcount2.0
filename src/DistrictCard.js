import React from 'react'

export const DistrictCard = ({location, stats}) => {
  const displayStats = Object.entries(stats).map((stat) => {
    return  <li className="statList">
              {stat[0]}: {stat[1]}
            </li>
  })

  return (
    <div className="DistrictCard">
      <h1 className="location">{location}</h1>
      <ul className="stats">{displayStats}</ul>
    </div>
  )
}