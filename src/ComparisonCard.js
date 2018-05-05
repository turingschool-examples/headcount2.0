import React from 'react';


const ComparisonCard = ({ findAverage, compareDistrictAverages, comparedSchools } ) => {
  
  // const { findAverage, compareDistrictAverages } = schoolRepository;
  const schoolOneAvg = findAverage(comparedSchools[0]);
  const schoolTwoAvg = findAverage(comparedSchools[1]);
  const comparisonInfo = compareDistrictAverages(comparedSchools[0], comparedSchools[1]);

  return (
    <div>
      <h1>{comparedSchools[0]}</h1>
      <h2>{schoolOneAvg}</h2>
      <h1>{comparisonInfo.compared}</h1>
      <h1>{comparedSchools[1]}</h1>
      <h2>{schoolTwoAvg}</h2>

    </div>
  );

};

export default ComparisonCard;