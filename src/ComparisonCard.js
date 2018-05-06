import React from 'react';
import './styles/ComparisonCard.css';


const ComparisonCard = ({ schoolRepository, comparedSchools } ) => {
  
  const { findAverage, compareDistrictAverages } = schoolRepository;
  const schoolOneAvg = findAverage(comparedSchools[0]);
  const schoolTwoAvg = findAverage(comparedSchools[1]);
  const comparisonInfo = 
    compareDistrictAverages(comparedSchools[0], comparedSchools[1]);

  return (
    <div className="compare-card">
      <h1 className="school-name">{comparedSchools[0]}</h1>
      <h2 className="school-avg">Mystery Data Avg: {schoolOneAvg}</h2>
      <h1 className="comparison" >{comparisonInfo.compared}</h1>
      <h1 className="school-name">{comparedSchools[1]}</h1>
      <h2 className="school-avg">Mystery Data Avg: {schoolTwoAvg}</h2>
    </div>
  );

};

export default ComparisonCard;