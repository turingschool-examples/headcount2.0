import React from 'react';
import CompareCard from './CompareCard'
import Card from './Card'


const CompareContainer = ({ data, compareAverage, clickActive, activeCards }) => {
  const card1 = data[0] !== undefined ? <Card city={data[0]} activeCards={activeCards}/> : <div className='empty-card'></div>
  const card2 = data[1] !== undefined ? <Card city={data[1]} activeCards={activeCards}/> : <div className='empty-card'></div>

  return (
    <div className='compare-container'>
      <CompareCard
        compareAverage={compareAverage}
        data={data}
        clickActive={clickActive}/>
      <div className='compare-card-container'>
        {card1}
        {card2}
      </div>
    </div>
  )
}

export default CompareContainer;
