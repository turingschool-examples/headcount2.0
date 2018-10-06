import React from 'react'
import './Card.css'

const Card = ({location, data}) => {
  return(
    <article className="Card">
      <h2>{location}</h2>
      <ul>
        { Object.keys(data).map((year, index) => {
          return (<li key={index}>
            {year}: {data[year]}
          </li>)
          })
        }
      </ul>
    </article>
  )
}

export default Card