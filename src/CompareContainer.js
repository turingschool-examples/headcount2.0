import React from 'react';
import CompareCard from './CompareCard'
import Card from './Card';
import { func, array} from 'prop-types'


const CompareContainer = ({ data, compareAverage, clickActive, activeCards }) => {
  const card1 = data[0] !== undefined ?
    <Card clickActive={clickActive}
          city={data[0]}
          activeCards={activeCards}/> :
    <div className='empty-card'></div>

  const card2 = data[1] !== undefined ?
    <Card clickActive={clickActive}
          city={data[1]}
          activeCards={activeCards}/> :
    <div className='empty-card'></div>

  return (
    <div className='compare-container'>
      <CompareCard compareAverage={compareAverage}
                   data={data}
                   clickActive={clickActive}/>
      <div className='compare-card-container'>
        {card1}
        {card2}
      </div>
    </div>
  )
}

CompareContainer.propTypes = {
  data: array,
  compareAverage: func,
  clickActive: func,
  activeCards: array
}

export default CompareContainer;
