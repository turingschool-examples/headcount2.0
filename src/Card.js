import React from 'react';
import './Card.css'

const Card = ({stats, location}) => {

  const yearData = Object.keys(stats)
  const SchoolScore = yearData.map(point => {
    return <p className={(stats[point] < .5) ? 'year-and-data-red' : 'year-and-data-green'}>
              {point} :  {stats[point]}</p>
  })

  return(
    <div className='card-div'>
      <h1 className='location'>{location}</h1>
      {SchoolScore}
    </div>
  )
}

export default Card