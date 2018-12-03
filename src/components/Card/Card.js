import React from 'react';
import './Card.scss';
import PropTypes from 'prop-types';

const Card = ({location, stats, addDistrictToCompare}) => {
  const statsKeys = Object.keys(stats);

  const listItems = statsKeys.map((key) => {
    let color = 'yellow'

    if (stats[key] > 0.5) {
      color = 'purple';
    } 

    return ( 
      <li key={key}>{`${key}: `}
        <span className={color}>
          {`${stats[key]}`}
        </span>
      </li>
    )
  })

  return ( 
    <article className="card" onClick={() => {addDistrictToCompare(location)}}>
      <h3>{location}</h3>
      <hr />
      <ul className="timeframes">
        {listItems}
      </ul>
    </article>
  )
}

Card.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
  addDistrictToCompare: PropTypes.func.isRequired
}

export default Card;