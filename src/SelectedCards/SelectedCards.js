import React from 'react';
import Card from '../Card/Card';
import './SelectedCards.css';
import DistrictRepository from '../helper.js';
import sampleData from '../data/kindergartners_in_full_day_program';
import PropTypes from 'prop-types';

const district = new DistrictRepository(sampleData);

const SelectedCards = (props) => {
  let cardList = Array.from(props.cleanData);
  const allCards = cardList.reduce((allCards, card, index) => {
    if (props.selectedCards.includes(props.cleanData[index].location)){
      allCards.push(
        <Card 
          key={index}
          {...props.cleanData[index]}
          selectCard={props.selectCard}
          selectedCards={props.selectedCards}
        />
      );
    }
    return allCards;
  }, []);

  let district0;
  let district1;
  let districtsAverage;
  const pickedCard = props.selectedCards;
  
  if (pickedCard[0] === pickedCard[1]) {
    pickedCard.shift();
    pickedCard.shift();
    allCards.pop();
  }
  
  if (allCards.length >= 1 && pickedCard.includes(allCards[0].props.location)) {
    districtsAverage = 
      <h2>
        {pickedCard[0]}
        {' : '}
        {district.findAverage(allCards[0].props.location)}
      </h2>;
  }

  if (allCards.length === 2) {
    const location0 = allCards[0].props.location;
    const location1 = allCards[1].props.location;

    district0 =
      <h3>
        {pickedCard[1]}
        {' : '}
        {district.findAverage(location0)}
      </h3>;
    district1 =
      <h3>
        {pickedCard[0]}
        {' : '}
        {district.findAverage(location1)}
      </h3>;
    districtsAverage =
      <h2>
        {"<------ "}
        {district.compareDistrictAverages(location0, location1).compared}
        { " ------>"}
      </h2>;
  }

  return (
    <div className='selected-cards'>
      <p className='info-text'>Selected Comparisons</p>
      { allCards[0] }
      <div className='compare-cards'>
        {district0}
        {districtsAverage}
        {district1}
      </div>
      { allCards[1] }
    </div>
  );
};

SelectedCards.propTypes = {
  cleanData: PropTypes.array.isRequired,
  selectCard: PropTypes.func.isRequired,
  selectedCards: PropTypes.array.isRequired
};

export default SelectedCards;
