import React from 'react';
import Card from './Card';
import ComparisonCard from './ComparisonCard';
import './styles/ComparisonContainer.css';


// comparedSchools is an array
//schoolData is an bigobject

const ComparisonContainer = ({ comparedSchools, schoolData, schoolRepository, updateComparedSchools }) => {
  const cardOneData = schoolData[comparedSchools[0]];
  const cardTwoData = schoolData[comparedSchools[1]];
 
  return (
    <div className="compare-wrapper">
      <Card 
        cardData={cardOneData}
        updateComparedSchools={updateComparedSchools} 
      />

      {comparedSchools.length === 2 &&
        <div>
          <ComparisonCard
            schoolRepository={schoolRepository}
            comparedSchools={comparedSchools}
          />
          <Card
            cardData={cardTwoData}
            updateComparedSchools={updateComparedSchools}
          />
        </div>}


    </div>
  );
};

export default ComparisonContainer;