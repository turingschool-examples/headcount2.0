import React from 'react'

export const Card = ({ location, stats }) => {
  const displayStats = stats.map(stat => <h4>{stat}</h4>)
  return(
  <div>
    <h3>{location}</h3>
    <p>{displayStats}</p>
  </div>
  )
}

export default Card