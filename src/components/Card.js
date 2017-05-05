import React from 'react';
import PropTypes from 'prop-types';


const Card = ({ location, data, handleCompare }) => {
  return (
    <div className='card' key={location} onClick={() => handleCompare(location)}>
      <h1 className='cardTitle'>
        Location: {location}</h1>
      {Object.keys(data).map((key, index) => {
        return (
          <div className='cardData' key={index}>
            Data: {data[key]}
          </div>
        )
      })}
    </div>
  );
}

Card.propTypes = {
  location: PropTypes.string,
  data: PropTypes.object,
  handleCompare: PropTypes.func,
}

export default Card;
