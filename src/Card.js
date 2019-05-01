import React from 'react';
import PropTypes from 'prop-types';


const Card = ({ district }) => {
  return (
    <article className='district'>
      <h3>{ district.location } </h3>
      <ul>
        {
          Object.keys(district.stats).map( (timeFrame, index) => {
            return (
              <li key={index}>
                {timeFrame}:
                {district.stats[timeFrame]}
              </li> 
            );
          })    
        }
      </ul>
    </article>
  
  );
};

Card.propTypes = { 
  district: PropTypes.object.isRequired
};

export default Card;