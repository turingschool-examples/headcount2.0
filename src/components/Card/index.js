import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = ({location, data}) => {

  return(
    <article className="Card">
      <h2 className="Card-title">{location}</h2>
      <ul className="Card-list">
        { data ? makeCards(data) : null}
      </ul>
    </article>
  )
}

const makeCards = data => {
  return Object.keys(data).map((year, index) => {
          return (
            <li key={index}
                className={`Card-entry ${checkLow(data, year)}`}>
              {year}: {data[year]}
            </li>)
          })
}

const checkLow = (data, year) => {
  if (data[year] <= 0.5) return 'low'
}

Card.propTypes = {
  location: PropTypes.string.isRequired,
  data: PropTypes.object
}

export default Card