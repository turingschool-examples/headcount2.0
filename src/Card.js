import React from 'react';
import PropTypes from 'prop-types';
import './styles/Card.css';


const Card = ({ district }) => {
  const roundTimeFrame = (timeFrame) => {
    return Math.round(district.stats[timeFrame] * 100) / 100;
  };

  return (
    <article className='district'>
      <h3>{ district.location } </h3>
      <ul>
        {
          Object.keys(district.stats).map( (timeFrame, index) => {
            return (
              <li 
                key={index}
                className={district.stats[timeFrame] < 0.5 ? 'red' : ''}
              >
                {timeFrame}:
                {roundTimeFrame(timeFrame)}
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