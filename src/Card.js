import React, { Component } from 'react';
import PropTypes from 'prop-types';

const Card = ( {district} ) => {
    
    
    return(
      <div>
        <h4>{district.location}</h4>
        <button>Select</button>
        <ul>
          <li>stats Here</li>
        </ul>
      </div>
    )
  }

Card.propTypes = {
  district: PropTypes.object.isRequired
}

export default Card;