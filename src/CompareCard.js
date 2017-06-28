import React from 'react';

const CompareCard = ({compareAverage}) => {
  const averageData = compareAverage()
  // if(averageData === undefined) {
  //   return <div></div>
  // }


  return (
    <div>
      <h1>{averageData.location1}</h1>
      <p>{averageData.city1Avg}</p>
      <p>{averageData.comparedAverages}</p>
      <h1>{averageData.location2}</h1>
      <p>{averageData.city2Avg}</p>
    </div>
  )
}

export default CompareCard
