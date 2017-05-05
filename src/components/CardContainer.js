import React from 'react';
import Card from './Card';

const CardContainer = ({handleData, handleCompare, handleCompareData}) => {
  const districtArray = Object.keys(handleData).map((districtObj) => <Card {...handleData[districtObj]} handleCompare={handleCompare}/>);
  
  const compareArray = handleCompareData.map((compareObj) => <Card {...compareObj}/>);
  console.log(compareArray);
  // console.log('compare data', handleCompareData);
  // console.log('data', handleData);

  return(
    <section className='cardsContainer'>
      {compareArray}
      {districtArray}
    </section>
  )
}

export default CardContainer;
