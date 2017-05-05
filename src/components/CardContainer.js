import React from 'react';
import Card from './Card';

const CardContainer = ({handleData, handleCompare, handleCompareData}) => {
  const districtArray = Object.keys(handleData).map((districtObj) => <Card key={handleData[districtObj].location} {...handleData[districtObj]} handleCompare={handleCompare}/>);

  const compareArray = handleCompareData.map((compareObj) => <Card key={compareObj.location} {...compareObj}/>);

  return(
    <section className='cardsContainer'>
      {compareArray}
      {districtArray}
    </section>
  )
}

export default CardContainer;
