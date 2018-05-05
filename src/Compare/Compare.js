import React, { Component } from 'react';
import './Compare.css';
import DistrictRepository from '../helper.js'
import Card from '../Card/Card.js'
import CompareCard from './CompareCard.js'
import kinderData from '../data/kindergartners_in_full_day_program.js'

const districtRepository = new DistrictRepository(kinderData);

const Compare = ({ updateCompareState, comparedCards }) => {

  if (comparedCards.length === 2) {
    const compareInfo = districtRepository.compareDistrictAverages(comparedCards[0].district.location, comparedCards[1].district.location)
    return( 
      <div className='compare'>
      <Card key={Date.now()}
        district={comparedCards[0].district}
        updateCompareState={updateCompareState}
      />
      <CompareCard compareInfo={compareInfo} />
      <Card key={Date.now()}
        district={comparedCards[1].district}
        updateCompareState={updateCompareState}
      />
      </div>
    )
  } else {

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
}


export default Compare;