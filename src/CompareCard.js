import React from 'react';
import Graph from './Graph'


const CompareCard = ({data, compareAverage}) => {
  const averageData = compareAverage(data) || {};
  const { location1, city1Avg, comparedAverages, location2, city2Avg } = averageData

  return (
    <div className='compare-card'>
      <h1>Location 1:{averageData.location1}</h1>
      <p>Average {averageData.city1Avg}</p>
      <p>Compared Average {averageData.comparedAverages}</p>
      <h1>Location 2:{averageData.location2}</h1>
      <p>Average {averageData.city2Avg}</p>
      <Graph data={data} />
    </div>
  )
}

export default CompareCard
