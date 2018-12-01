import React from 'react';
import PropTypes from 'prop-types';
import './CompareCard.css';

const CompareCard = (props) => {
  let keys = Object.keys(props.cardInfo)
  let values = Object.values(props.cardInfo)
  let leftArrow = '<----'
  let rightArrow = '---->'


  return (
    <div className="compare-card">
      <h1 className="location">{keys[0]}:</h1>
      <h2 className="location-num">{values[0]}</h2>
      <h1 className="compare-num"><span>{leftArrow}</span> {values[2]} <span>{rightArrow}</span></h1>
      <h1 className="location">{keys[1]}:</h1>
      <h2 className="location-num">{values[1]}</h2>
    </div>

  )

}


export default CompareCard;