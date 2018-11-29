import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = ( {location, stats} ) => {
    const displayStats = Object.keys(stats).map(stat => {
      return ( <li>{stat} {stats[stat] }</li>
        )
    })
    
    return(
      <div className='card'>
        <h4>{ location }</h4>
        <button>Select</button>
        <ul>
          {displayStats} 
        </ul>
      </div>
    )
  }

Card.propTypes = {
  location: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired
}

export default Card;