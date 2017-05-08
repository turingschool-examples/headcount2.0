import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';
import CompareCard from './CompareCard';

const CardContainer = ({handleData, handleCompare, handleCompareData, handleComparison}) => {
  const districtArray = Object.keys(handleData).map((districtObj) => <Card key={handleData[districtObj].location} {...handleData[districtObj]} handleCompare={handleCompare}/>);

  const compareArray = handleCompareData.map((compareObj, index) => {
    if (index === 2) {
      return (
      <CompareCard key={index} {...compareObj} />
      )
    }
    return (
    <Card key={compareObj.location} active={true} handleCompare={handleCompare} {...compareObj}/>
    )

  })

  return(
    <section className='cardsContainer'>
      <div className='compareCards'>
        {compareArray}
      </div>
      <div className='cardList'>
        {districtArray}
      </div>
    </section>
  )
}

CardContainer.propTypes = {
  handleData: PropTypes.object,
  handleCompare: PropTypes.func,
  handleCompareData: PropTypes.array,
}

export default CardContainer;
