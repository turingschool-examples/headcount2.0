import React from 'react';
import CompareCard from './CompareCard'
import Card from './Card'


const CompareContainer = ({ data, compareAverage, clickActive }) => {
  const card1 = data[0] !== undefined ? <Card city={data[0]}/> : <div className='empty-card'></div>
  const card2 = data[1] !== undefined ? <Card city={data[1]}/> : <div className='empty-card'></div>

  return (
    <div className='compare-container'>
      {card1}
      <CompareCard compareAverage={compareAverage} data={data}/>
      {card2}
    </div>
  )
}

export default CompareContainer;
