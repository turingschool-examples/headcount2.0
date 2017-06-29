import React from 'react';
import Card from './Card';
import CompareCard from './CompareCard'

const Container = ({ data, clickActive, className, compareAverage }) => {
  const iterator = Object.keys(data)
                         .map(key => <Card city={data[key]} key={key} clickActive={clickActive} />)
  return (
    <div className={className}>
      {iterator}
    </div>
  )
}

export default Container;
