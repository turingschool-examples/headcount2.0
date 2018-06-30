import React from 'react';
import './ComparisonContainer.css';

const ComparisonContainer = ( { cardArray } ) => {
  console.log(cardArray)
  if(cardArray.length === 0) {
    return (
      <div> Compare Districts by Clicking on 2 Cards</div>
    )
  }
  if(cardArray.length === 1) {
    const newCards = cardArray.map(location => {
      const cardData =
        Object.keys(location).map(district => { 
          const dataArray = Object.keys(location[district]).map(year => {
          const toggle = location[district][year] <= .5 ? 'low' : 'high'
          return (<aside key={Math.random() * 10}
                         className={toggle}> {year}: {location[district][year]} 
                  </aside>)
          })
          return (<div  className="comp-card" 
                        key={Math.floor(Math.random*100)}>
                  <h3>{district}</h3>
                  <ul>{dataArray}</ul>
                  </div>)
        })
        return cardData
    })
    return (<div className="comp-container"> {newCards} </div>)
  }




}



export default ComparisonContainer;