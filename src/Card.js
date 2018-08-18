import React from 'react';

import './style/Card.css';

export const Card = ({ district, handleClick }) => {
  return (
    <aside 
      className={`${district.selected ? 'card-selected' : ''}`} 
      onClick={() => { handleClick(district.location); }}
    > 
      <h3>{district.location}</h3>
      <table>
        {Object.keys(district.stats).map((stat, index) => {
          return (
            <tr className={`${district.stats[stat] > .5 ? 'above-half' : ''}`} key={index}>
              <td>{stat}</td>
              <td>{district.stats[stat]}</td>
            </tr>
          );
        })}
      </table>
    </aside>
  );
};