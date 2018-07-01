import React from 'react';
import './ComparisonContainer.css';
import DistrictRepository from './helper.js';
const districts = new DistrictRepository();

const ComparisonContainer = ( { cardArray } ) => {
  if(cardArray.length === 0) {
    return (
      <div> Compare Districts by Clicking on 2 Cards</div>
    )
  }
  if(cardArray.length > 0) {
    var newCards = cardArray.map(location => {
      const cardData =
        Object.keys(location).map(district => { 
          var districtAvg = districts.findAverage(district)
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
                  <h4>Average: {districtAvg}</h4>
                  </div>)
        })
        return cardData

    })

    if(cardArray.length === 1) {
      return (<div className="comp-container"> {newCards} </div>)
    } 
    if(cardArray.length === 2) {
    const displayAvgs = newCards.map( obj => obj[0].props.children[2])
    const totalAvg = displayAvgs.reduce(( sum, num ) => {
      return sum / num.props.children[1]
    }, 1)
      return (<div className="comp-container">
                <div> {newCards[0]}</div>
                <div className="total-card">{displayAvgs} averages to: {Number(parseFloat(totalAvg).toFixed(2))/2}</div>
                <div> {newCards[1]}</div>
              </div>
        )
    }
  }




}



export default ComparisonContainer;