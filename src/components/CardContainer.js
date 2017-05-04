import React from 'react';
import Card from './Card';

const CardContainer = ({handleData}) => {
  const keys = Object.keys(handleData.district);
  return(
    <section className='cardContainer'>
      {keys.map((key, index) => {
        return (
          <div key={index}>
            <Card
              location={handleData.district[key].location}
              data={handleData.district[key].data}
            />
          </div>
        );
      })}
    </section>
  )
}

export default CardContainer;
