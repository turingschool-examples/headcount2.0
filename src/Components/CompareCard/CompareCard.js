import React from 'react';
import './compare-card.css';
import PropTypes from 'prop-types';

const CompareCard = ({districtMethods, selectedCards}) => {
  
  let compared;
  let locationA;
  let locationB;
  let locationAverageA;
  let locationAverageB;
  let displayCompared;

  if (selectedCards.length === 2) {
    displayCompared = 
      districtMethods.compareDistrictAverages(selectedCards[0].location, selectedCards[1].location);
    compared = displayCompared.compared;
    locationA = selectedCards[0].location;
    locationB = selectedCards[1].location;
    locationAverageA = displayCompared[selectedCards[0].location];
    locationAverageB = displayCompared[selectedCards[1].location];
    
    return (
      <div className="compared-card">
        <div className="school-a-div">
          <h3 className="school-a" >{locationA}</h3>
          <h4 className="school-average">{locationAverageA}</h4>
        </div>
        <div className="compared-div">
          <h4 className="compared-average">{"<---"}{compared} {"--->"}</h4>
        </div>
        <div className="school-b-div">
          <h3 className="school-b">{locationB}</h3>
          <h4 className="school-average">{locationAverageB}</h4>
        </div>
      </div>
    );
  } else {
    return (
      <div>
      </div>
    );
  }
};

CompareCard.propTypes = {
  districtMethods: PropTypes.object.isRequired,
  selectedCards: PropTypes.arrayOf(PropTypes.object)
};

export default CompareCard;