import React from 'react';
import Card from './Card';

const CardContainer = ({handleData, handleCompare, handleCompareData}) => {
  // const infoArray = Object.keys(handleData).map((districtObj) => {<Card location={handleData[districtObj.location]} data={handleData[districtObj.data]}/>})
  // console.log(infoArray);
  const keys = Object.keys(handleData);
  console.log('compare data', handleCompareData);
  console.log('data', handleData);
  return(
    // <section className='cardsContainer'>
    //   {infoArray}
    // </section>
      <section className='cardsContainer'>
        {keys.map((key, index) => {
          console.log('key', key);
          return (
            <div className='cards' key={handleData[key].location}>
              {<Card
                location={handleData[key].location}
                data={handleData[key].data}
                compare={handleCompare}
               />}
            </div>
          );
        })}
      </section>
  )
}

export default CardContainer;
