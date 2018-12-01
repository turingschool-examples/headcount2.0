import React from 'react';
import PropTypes from 'prop-types';
import './CompareCard.css';

const CompareCard = (props) => {
  let keys = Object.keys(props.cardInfo)
  let values = Object.values(props.cardInfo)
  console.log('keys', keys)

  return (
    <div className="compare-card">
      <h1 className="location">{keys[0]}:</h1>
      <h2 className="location-num">{values[0]}</h2>
      <h1 className="compare-num"><-{values[2]}-></h1>
      <h1 className="location">{keys[1]}:</h1>
      <h2 className="location-num">{values[1]}</h2>
    </div>

  )

}


export default CompareCard;