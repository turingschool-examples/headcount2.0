import React from 'react'

const Card = ({location, data}) => {
  const dataList = data.map((dataPoint, index) => <li>dataPoint[index]</li>)

  return (
    <div className='Card'>
      <h3>{location}</h3>
    </div>
  )
}

export default Card;