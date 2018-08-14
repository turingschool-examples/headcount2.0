import React from 'react'


const Card = ({data}) => {
  const stats = Object.entries(data.stats).map(key => (
    <p>{key[0]}: {key[1]}</p>
))

  return (
    <div className='card'>
      <p className='location'>{data.location}</p>
      <div>{stats}</div>
    </div>
  )
}

export default Card