import React from 'react';

const Card = ({ location, data, compare }) => {
  return (
    <div className='card' key={location} onClick={() => compare(location)}>
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

export default Card;
