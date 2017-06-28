import React from 'react';
import CompareCard from './CompareCard'
import Card from './Card'

const mockCardData = [
  {
      data : {
        2004: 0.302,
        2005: 0.267,
        2006: 0.354,
      },
      location: "ACADEMY 20",

  },
  {

      data : {
        2004: 0.3,
        2005: 0.9,
        2006: 0.853,
      },
      location: "Colorado",

  },
]

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
