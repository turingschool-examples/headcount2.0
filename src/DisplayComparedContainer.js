import React from 'react';
import Card from './Card';
import './DisplayComparedContainer.css';

const DisplayComparedContainer = ({comparedCards, compareDistricts}) => {
  if (comparedCards.length === 2) {
    let locationKeys = Object.keys(comparedCards);
    const results = compareDistricts(...locationKeys);
    console.log(results)
    const resultsKeys = Object.keys(results);
    const districtCards = locationKeys.map((district, i) => {
      return <Card
        {...comparedCards[district]}
        key={Date.now() + i}
      />
    });
    const resultCards = resultsKeys.map((district, i) => {
      return <div key={Date.now() + i}> 
      {[district]}:{results[district]}
      </div>
    })
    console.log(resultCards)

    return (
      <div className="DisplayComparedContainer-Component">
        <h1>results</h1>
        { districtCards }
        { resultCards }
      </div>
    )

  }
  if (comparedCards.length >= 1) {
    const locationKeys = Object.keys(comparedCards);
    const districtCards = locationKeys.map((district, i) => {
      return <Card
        {...comparedCards[district]}
        key={Date.now() + i}
      />
    });
    return (
      <div className="DisplayComparedContainer-Component">
        <h1>display the cards</h1>
        { districtCards }
      </div>
    )
  }  
  return (
    <div className="DisplayComparedContainer-Component">
      <h1>Display</h1>    
    </div>
  )  
}

export default DisplayComparedContainer;