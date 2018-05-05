import React from 'react';
import Card from './Card';
import './SelectedCards.css';
import DistrictRepository from './helper.js';
import data from './data/kindergartners_in_full_day_program';
import PropTypes from 'prop-types';

const district = new DistrictRepository(data);

const SelectedCards = (props) => {
  const districtKeys = Object.keys(props.data);
  const districtCards = districtKeys.reduce((districtCards, districtKey, index) => {
    if(props.selectedCards.includes(props.data[districtKey].location)){
      districtCards.push(<Card key={index} {...props.data[districtKey]} selectCard={props.selectCard} selectedCards={props.selectedCards}/>)
    }
    return districtCards
  }, []);

  let district0;
  let district1;
  let districtsAverage;

  if(districtCards.length === 2) {
    district0 = <h3>{props.selectedCards[1]} {':'} {district.findAverage(districtCards[0].props.location)}</h3>;
    district1 = <h3>{props.selectedCards[0]} {':'} {district.findAverage(districtCards[1].props.location)}</h3>;
    districtsAverage = <h2>{"<------ "} {district.compareDistrictAverages(districtCards[0].props.location, districtCards[1].props.location).compared} { " ------>"}</h2>;
  }

  return (
    <div className='selected-cards'>
      { districtCards[0] }
      <div className='compare-cards'>
        {district0}
        {districtsAverage}
        {district1}
      </div>
      { districtCards[1] }
    </div>
  );
}

// SelectedCards.propTypes = {
//     selectedCards: PropTypes.array,
//     data: PropTypes.array
// }

export default SelectedCards;