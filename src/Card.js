import React from 'react';

const Card = ({districtName, districtObject}) => (
  <article>
    <h3>{districtName}</h3>
    <ul>
      {
        Object.keys(districtObject).map( (item, index) =>
          <li key={index}>{item}: {districtObject[item].Data}</li> )
      }
    </ul>
  </article>
);

export default Card;
