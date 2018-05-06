import React from 'react';
import './Compare.css';
import DistrictRepository from '../helper.js';
import Card from '../Card/Card.js';
import CompareCard from './CompareCard.js';
import kinderData from '../data/kindergartners_in_full_day_program.js';
import PropTypes from 'prop-types';

const districtRepository = new DistrictRepository(kinderData);

const Compare = ({ updateCompareState, comparedCards }) => {
  if (comparedCards.length === 2) {
    const compareInfo = districtRepository.compareDistrictAverages(
      comparedCards[0].district.location, 
      comparedCards[1].district.location
    );
    return ( 
      <div className='compare'>
        <Card key={Date.now()}
          district={comparedCards[0].district}
          updateCompareState={updateCompareState}
          // clickedState={true}
        />
        <CompareCard compareInfo={compareInfo} />
        <Card key={(Date.now()+1)}
          district={comparedCards[1].district}
          updateCompareState={updateCompareState}
          // clickedState={true}
        />
      </div>
    );
  } else {

    const comparedCardInfo = comparedCards.map(( districtCard, index) => {
      return ( 
        <Card key = { index }
          district = { districtCard.district }
          updateCompareState = { updateCompareState }
          // clickedState={true}
        />
      );
    });
    return (
      <div className="compare">
        { comparedCardInfo }
      </div>
    );
  }
};

Compare.propTypes = {
  comparedCards: PropTypes.arrayOf(PropTypes.object),
  updateCompareState: PropTypes.func.isRequired
};

export default Compare;