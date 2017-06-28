import React from 'react';
import Graph from './Graph'


const CompareCard = ({data, compareAverage}) => {
  const averageData = compareAverage(data)
  console.log(data);

  return (
    <div>
      <h1>{averageData.location1}</h1>
      <p>Average {averageData.city1Avg}</p>
      <p>Compared Average {averageData.comparedAverages}</p>
      <h1>{averageData.location2}</h1>
      <p>Average {averageData.city2Avg}</p>
      <Graph data={data}/>
    </div>
  )
}

export default CompareCard
