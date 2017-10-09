import React, { Component } from 'react';
import PropTypes from 'prop-types';
import cardcss from './styles/Card.css';

const classSwitch = (num) => {
  return num >= 0.5 ? 'blue' : 'red';
};

const Card = ({ districtName, districtObject, onCardClick, borderColorClass }
) => (
  <article
    className={borderColorClass}
    onClick={() => onCardClick(districtName)}>
    <h3>{districtName}</h3>
    <ul>
      {
        Object.keys(districtObject).map( (item, index) =>
          <li
            key={index}
            className={classSwitch(districtObject[item])}>
            {item}: {districtObject[item]}
          </li>)
      }
    </ul>
  </article>
);

Card.propTypes = {
  districtName: PropTypes.string,
  districtObject: PropTypes.object,
  onCardClick: PropTypes.func,
  borderColorClass: PropTypes.string
};

export default Card;
