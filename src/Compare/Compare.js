import React, { Component } from 'react';
import './Compare.css';
import DistrictRepository from '../helper.js'
import Card from '../Card/Card.js'

const Compare = ({ updateCompareState, comparedCards }) => {
  const comparedCardInfo = comparedCards.map(( districtCard, index) => {
    return ( 
    <Card key = { index }
      district = { districtCard.district }
      updateCompareState = { updateCompareState }
    />
    )
  });
  return (
    <div className="compare">
      { comparedCardInfo }
    </div>
  )
}


export default Compare;