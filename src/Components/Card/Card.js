import React from 'react';
import './card.css'
import PropTypes from 'prop-types';

const Card = (props) => {
  const {location, stats, selected, selectCard} = props

  const active = selected ? 'selected' : 'unselected'

  const statKeys = Object.keys(stats)
  const spreadStats = statKeys.map(stat => {
      const statLevel = stats[stat] > .5 ? 'high-stat' : 'low-stat';

      return (
        <div className="stat-container" id={statLevel}>
          <h5 className="year">{stat}:</h5>
          <p className="stat">{stats[stat]}</p>
        </div>
      )
    })
  

  return (
    <div 
      onClick={() => selectCard(location)}
      className="card" 
      id={active} 
    >
      <h1 className="location">{location}</h1>
      <div>
      {spreadStats}
      </div>
    </div>
  )
}

Card.propTypes = {
  location: PropTypes.string,
  stats: PropTypes.object,
  selected: PropTypes.bool,
  selectCard: PropTypes.func
}

export default Card;