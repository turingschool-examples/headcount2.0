import React from 'react';
import Card from './Card.js';
import './CompareCardContainer.css';

const CompareCardContainer = (props) => {
  let card1;
  let card2;
  let middleCard;
  if(props.appState.compareCard1 !== null) {
    card1= <Card cardInfo={props.appState.compareCard1} />
  }
  if(props.appState.compareCard2 !== null) {
    card2= <Card cardInfo={props.appState.compareCard2} />
  }
  if(props.appState.compareCard1 !== null && props.appState.compareCard2 !== null) {
    props.compareCards(props.appState.compareCard1.location, props.appState.compareCard2.location)
  }

  return (
    <div className="compare-cards">{card1}{card2}</div>

  )
}

export default CompareCardContainer;