import React from 'react'
import PropTypes from 'prop-types'
import './Card.css'

const Card = ({location, stats}) => {
  return(
    <article className="Card">
      <h2 className="Card-title">{location}</h2>
      <ul className="Card-list">
        { stats ? makeCards(stats) : null}
      </ul>
    </article>
  )
}

const makeCards = stats => {
  return Object.keys(stats).map((year, index) => {
          return (
            <li key={index}
                className={`Card-entry ${checkLow(stats, year)}`}>
              {year}: {stats[year]}
            </li>)
          })
}

const checkLow = (stats, year) => {
  if (stats[year] <= 0.5) return 'low'
}

Card.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object
}

export default Card