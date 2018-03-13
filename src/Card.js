import React from 'react';
import './styles/card.css'

export const Card = ({data, location}) => {

  const years = Object.keys(data).map(year => {
    let roundedPerc = parseFloat(data[year].toFixed(2));
    if (roundedPerc < 0.5) {
      return <p>{year}: {roundedPerc}</p>
    } else {
      return <p className="goodSchool">{year}: {roundedPerc}</p>
    }
      
    })
  return (
    <div className="card">
      <h2>{location}</h2>
      {years}
    </div>
  )

}