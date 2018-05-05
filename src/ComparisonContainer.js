import React from 'react';
import Card from './Card';
// import './styles/ComparisonContainer.css';
// import ComparisonCard from './ComparisonCard';
// import ComparisonCard from './ComparisonCard'

// comparedSchools is an array
//schoolData is an bigobject
const ComparisonContainer = ({ comparedSchools, schoolData }) => {
  const cardOneData = schoolData[comparedSchools[0]];
  const cardTwoData = schoolData[comparedSchools[1]];
  debugger
  return (
    <div>
      <Card cardData={cardOneData} />
      {/* <ComparisonCard /> */}
      {comparedSchools.length === 2 && <Card cardData={cardTwoData} /> }
      
    </div>
  );
};

export default ComparisonContainer;