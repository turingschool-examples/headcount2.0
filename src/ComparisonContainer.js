import React from 'react';

const ComparisonContainer = ({ clickedCards }) => {
  console.log(clickedCards)
  if(clickedCards) {
    const newCards = Object.keys(clickedCards).map(location => {
      const toggle = 0.4 <= .5 ? 'low' : 'high'
      const cardData = <aside key={Math.random() * 10} className={toggle}> year: stats </aside>
      return (
        <div className="Card" >
          <h3>{location}</h3>
          <ul>{cardData}</ul>
        </div>
      )
    })
    return (
      <div> {newCards} </div>
    )
    
  } else {
    return (
      <div> </div>
    )
  }
  
};

export default ComparisonContainer;