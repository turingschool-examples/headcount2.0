import React from 'react';
import Card from './Card';
import './SelectedCards.css'
import DistrictRepository from './helper.js'
import data from './data/kindergartners_in_full_day_program'

const district = new DistrictRepository(data);

const SelectedCards = (props) => {
  const districtKeys = Object.keys(props.data);
  const districtCards = districtKeys.reduce((districtCards, districtKey, index) => {
    if(props.selectedCards.includes(props.data[districtKey].location)){
      districtCards.push(<Card key={index} {...props.data[districtKey]} selectCard={props.selectCard} selectedCards={props.selectedCards}/>)
    }
    return districtCards
  }, []);
  console.log(districtCards)
  let district0;
  let district1;
  let districtsAverage;
  if(districtCards.length) {
    district0 = districtCards.findAverage(districtCards[0].props.location);
    district1 = districtCards.findAverage(districtCards[1].props.location);
    districtsAverage = districtCards.compareDistrictAverages(districtCards[0].props.location, districtCards[1].props.location)
  }

  return (
    <div className='selected-cards'>
      { districtCards[0] }
      <div className='compare-shit'>
        {district0} 
        {districtsAverage}
        {district1}
      </div>
      { districtCards[1] }
    </div>
  );
}

export default SelectedCards;