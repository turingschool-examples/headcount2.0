import React from 'react';
import Card from './Card';
import ComparisonCard from './ComparisonCard';
// import './styles/ComparisonContainer.css';


// comparedSchools is an array
//schoolData is an bigobject

const ComparisonContainer = ({ comparedSchools, schoolData, findAverage, compareDistrictAverages }) => {
  const cardOneData = schoolData[comparedSchools[0]];
  const cardTwoData = schoolData[comparedSchools[1]];
 
  return (
    <div>
      <Card cardData={cardOneData} />

      {comparedSchools.length === 2 &&
        <div>
          <ComparisonCard
            findAverage={findAverage}
            compareDistrictAverages={compareDistrictAverages}
            comparedSchools={comparedSchools}
            />
          <Card
            cardData={cardTwoData}
            />
        </div>}


    </div>
  );
};

export default ComparisonContainer;