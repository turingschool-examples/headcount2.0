import React from 'react';
import Card from './Card';
import './SelectedCards.css';
import DistrictRepository from './helper.js';
import sampleData from './data/kindergartners_in_full_day_program';
import PropTypes from 'prop-types';

const district = new DistrictRepository(sampleData);

const SelectedCards = (props) => {
  let cardObjectList = Array.from(props.data);
  const districtCards = cardObjectList.reduce((districtCards, cardObject, index) => {
    if (props.selectedCards.includes(props.data[index].location)){
      districtCards.push(<Card key={index} {...props.data[index]} selectCard={props.selectCard} selectedCards={props.selectedCards}/>);
    }
    return districtCards;
  }, []);

  let district0;
  let district1;
  let districtsAverage;

  if (props.selectedCards[0] === props.selectedCards[1]) {
    props.selectedCards.shift();
    props.selectedCards.shift();
    districtCards.pop();
  }

  if (districtCards.length >= 1 && props.selectedCards.includes(districtCards[0].props.location)) {
    districtsAverage = <h2>{props.selectedCards[0]} {':'} {district.findAverage(districtCards[0].props.location)}</h2>;
  }

  if (districtCards.length === 2) {
    district0 = <h3>{props.selectedCards[1]} {':'} {district.findAverage(districtCards[0].props.location)}</h3>;
    district1 = <h3>{props.selectedCards[0]} {':'} {district.findAverage(districtCards[1].props.location)}</h3>;
    districtsAverage = <h2>{"<------ "} {district.compareDistrictAverages(districtCards[0].props.location, districtCards[1].props.location).compared} { " ------>"}</h2>;
  }

  return (
    <div className='selected-cards'>
      <p className='info-text'>Selected Comparisons</p>
      { districtCards[0] }
      <div className='compare-cards'>
        {district0}
        {districtsAverage}
        {district1}
      </div>
      { districtCards[1] }
    </div>
  );
};

SelectedCards.propTypes = {
  data: PropTypes.array,
  selectCard: PropTypes.func,
  selectedCards: PropTypes.array
}

export default SelectedCards;
