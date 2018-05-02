import React from 'react';

const Card = (props) => {
  const yearKeys = Object.keys(props.stats);
  const dataElement = yearKeys.map((year, index) => <li key={index} >{year + ": " + props.stats[year]}</li> )

  return (
    <div>
      <h3>{props.location}</h3>
      <ul>
        { dataElement }
      </ul>
    </div>
  )

}

export default Card;