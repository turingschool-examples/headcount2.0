import React from 'react';

const ComparisonContainer = ({ clickedCards }) => {
  console.log(clickedCards)
  if(clickedCards) {
    const newCards = Object.keys(clickedCards).map(location => {
      
        const cardData =

          Object.keys(clickedCards[location]).map(year => {
            const toggle = clickedCards[location][year] <= .5 ? 'low' : 'high'
            return <aside key={Math.random() * 10} className={toggle}> {year}: {clickedCards[location][year]} </aside>

          })
    
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