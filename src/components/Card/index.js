import React from 'react'
import './Card.css'

const Card = ({location, data}) => {
  return(
    <article className="Card">
      <h2 className="Card-title">{location}</h2>
      <ul className="Card-list">
        { Object.keys(data).map((year, index) => {
          return (<li key={index} className="Card-entry">
            {year}: {data[year]}
          </li>)
          })
        }
      </ul>
    </article>
  )
}

export default Card