import React from 'react'

export const DistrictCard = ({location, stats}) => {
  const displayStats = Object.entries(stats).map((stat) => {
    return <li className="statName">
              {stat[0]}: {stat[1]}
            </li>
  }
  )

  return(
    <div className='DistrictCard'>
      <h1>{location}</h1>
      <ul>{displayStats}</ul>
    </div>
  )
}