import React from 'react';

const Card = ({ location, data }) => {
  return (
    <div className='card'>
      <h1 className='cardTitle'>
        Location: {location}</h1>
      {Object.keys(data).map((key, index) => {
        return(
          <div className='cardData' key={index}>
            Data: {data[key]}
          </div>
        )
      })}
    </div>
  );
}

export default Card;
