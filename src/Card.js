import React from 'react';

const Card = ({stats, location}) => {

  const yearData = Object.keys(stats)
  const SchoolScore = yearData.map(point => {
    return <p>{point} :  {stats[point]}</p>
  })

  return(
    <div>
      <h1>{location}</h1>
      {SchoolScore}
    </div>
  )
}

export default Card