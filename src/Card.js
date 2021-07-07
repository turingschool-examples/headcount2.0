import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Card.css'

const Card = ( {location, stats} ) => {
    const displayStats = Object.keys(stats).map(stat => {
      return ( <li className={`listedStats ${stats[stat] < 0.5 ? 'below' : 'above'}`}> {`${stat}: ${stats[stat] }`}</li>
        )
    })
    
    return(
      <div className='card'>
        <span>
          <h5>{ location }</h5>
          <button className='select-btn'>Select</button>
          </span>
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