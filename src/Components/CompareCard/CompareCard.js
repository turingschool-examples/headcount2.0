import React from 'react';
import './compare-card.css';

const CompareCard = ({districtMethods, selectedCards}) => {
  
  let compared;
  let locationA;
  let locationB;
  let locationAverageA;
  let locationAverageB;
  let displayCompared;

  if (selectedCards.length === 2) {
    displayCompared = districtMethods.compareDistrictAverages(selectedCards[0].location, selectedCards[1].location)
     compared = displayCompared.compared
     locationA = selectedCards[0].location
     locationB = selectedCards[0].location
     locationAverageA = displayCompared[selectedCards[0].location]
     locationAverageB = displayCompared[selectedCards[1].location]
    
     return (
       <div>
         <h3>Compared</h3>
         <h4>{compared}</h4>
         <h3>{locationA}</h3>
         <h4>{locationAverageA}</h4>
         <h3>{locationB}</h3>
         <h4>{locationAverageB}</h4>
       </div>
     )
  } else {
    return (
      <div>
      </div>
    )
  }
}

export default CompareCard;