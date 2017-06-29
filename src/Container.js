import React from 'react';
import Card from './Card';
import CompareCard from './CompareCard'

const Container = ({ data, clickActive, className, compareAverage, activeCards }) => {
  const iterator = Object.keys(data)
                         .map(key => <Card
                                       city={data[key]}
                                       key={key}
                                       clickActive={clickActive}
                                       activeCards={activeCards}/>)

  return (
    <div>
      {iterator}
    </div>
  )
}

export default Container;
