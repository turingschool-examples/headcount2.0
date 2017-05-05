import React from 'react';
import Card from './Card';
import PropTypes from 'prop-types';

const CardContainer = ({handleData, handleCompare, handleCompareData}) => {
  const districtArray = Object.keys(handleData).map((districtObj) => <Card key={handleData[districtObj].location} {...handleData[districtObj]} handleCompare={handleCompare}/>);

  const compareArray = handleCompareData.map((compareObj) => <Card key={compareObj.location} {...compareObj}/>);

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
