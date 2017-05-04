import React from 'react';
import Card from './Card';

const CardContainer = ({handleData}) => {
  // const infoArray = Object.keys(handleData).map((districtObj) => {<Card location={handleData[districtObj.location]} data={handleData[districtObj.data]}/>})
  // console.log(infoArray);
  const keys = Object.keys(handleData.district);
  // console.log(handleData);
  return(
    // <section className='cardsContainer'>
    //   {infoArray}
    // </section>
    <section className='cardsContainer'>
      {keys.map((key, index) => {
        return (
          <div className='cards'key={index}>
            {<Card
              location={handleData.district[key].location}
              data={handleData.district[key].data}
             />}
          </div>
        );
      })}
    </section>
  )
}

export default CardContainer;
