import React from 'react';
import Card from './Card';
import CompareCard from './CompareCard'

const Container = ({ data, clickActive, className }) => {
  console.log(className);
  const iterator = Object.keys(data).map(key => {
      return (
        <Card city= {data[key]} key={key} clickActive={clickActive} />
    )
  })

  const compareSection = (className) => {
    if (className === 'compare-container') {
      return <CompareCard />
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
