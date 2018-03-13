import React from 'react';
import './styles/card.css'

export const Card = ({data, location}) => {
  const years = Object.keys(data).map(year => <p>{year}: {data[year]}</p>)
  return (
    <div className="card">
      <h2>{location}</h2>
      {years}
    </div>
  )

}