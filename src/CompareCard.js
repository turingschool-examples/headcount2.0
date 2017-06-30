import React from 'react';
import Graph from './Graph'
import { array, func } from 'prop-types'

const CompareCard = ({data, compareAverage}) => {
  const averageData = compareAverage(data) || {};
  const { location1, city1Avg, comparedAverages, location2, city2Avg } = averageData

  return (
    <div className='compare-card'>
      <div className="compare-location-1">
        <h1>Location 1: {location1}</h1>
        <p>Average {city1Avg}</p>
      </div>
      <div className="compare-location-2">
        <h1>Location 2: {location2}</h1>
        <p>Average {city2Avg}</p>
      </div>
      <p className='compared-average-display'>
        Compared Average: {comparedAverages}
      </p>
      <Graph data={data} />
    </div>
  )
}

CompareCard.propTypes = {
  data: array,
  compareAverage: func,
}

export default CompareCard
