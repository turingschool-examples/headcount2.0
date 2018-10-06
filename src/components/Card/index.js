import React from 'react'
import './Card.css'

const Card = ({location, data}) => {
  return(
    <article className="Card">
      <h2 className="Card-title">{location}</h2>
      <ul className="Card-list">
        { Object.keys(data).map((year, index) => {
          return (
            <li key={index}
                className={`Card-entry ${checkLow(data, year)}`}>
              {year}: {data[year]}
            </li>)
          })
        }
      </ul>
    </article>
  )
}

const checkLow = (data, year) => {
  if (data[year] >= 0.5) return 'low'
}

export default Card