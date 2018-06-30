import React from 'react';
import './ComparisonContainer.css';

const ComparisonContainer = ({ firstClickedCard }) => {
  console.log(firstClickedCard)
  if(firstClickedCard) {
    const newCards = Object.keys(firstClickedCard).map(location => {
      const cardData =

        Object.keys(firstClickedCard[location]).map(year => {
          const toggle = firstClickedCard[location][year] <= .5 ? 'low' : 'high'
          return <aside key={Math.random() * 10} className={toggle}> {year}: {firstClickedCard[location][year]} </aside>
          })
    
      return (
        <div className="comp-card" key={Math.floor(Math.random*100)}>
          <h3>{location}</h3>
          <ul>{cardData}</ul>
        </div>
      )
    })
    return (
      <div className="comp-container"> {newCards} </div>
    )
    
  } else {
    return (
      <div> </div>
    )
  }
  
};

export default ComparisonContainer;