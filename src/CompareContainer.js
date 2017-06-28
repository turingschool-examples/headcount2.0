import React from 'react';
import CompareCard from './CompareCard'

const CompareContainer = ({ data, clickActive, className, compareAverage }) => {
  const iterator = Object.keys(data)
                         .map(key => <Card city={data[key]} key={key} clickActive={clickActive} />)

  const compareSection = (className) => {
    if (className === 'compare-container') {
      return <CompareCard compareAverage={compareAverage}/>
    }
  }

  return (
    <div className={className}>
      {compareSection(className)}
      {iterator}
    </div>
  )
}

export default Container;
