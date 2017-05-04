import React from 'react';

const Card = ({ location, data }) => {
  return (
    <div>
      <h1>Location: {location}</h1>
      {Object.keys(data).map((key, index) => {
        return(
          <p key={index}>
            Data: {data[key]}
          </p>
        )
      })}
    </div>
  );
}

export default Card;
