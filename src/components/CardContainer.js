import React from 'react';
import Card from './Card';

const CardContainer = ({handleData}) => {
  const keys = Object.keys(handleData.district);

  return(
    <section>
      {keys.map((key, index) => {
        if (keys.length === 2) {
        return (
          <div key={handleData.district.location}>
            <Card
              location={handleData.district.location}
              data={handleData.district.data}
            />
          </div>
        );

      } else {
        return (
          <div key={handleData.district[key].location}>
            <Card
              location={handleData.district[key].location}
              data={handleData.district[key].data}
            />
          </div>
        );
       }
      })}
    </section>
  )
}

export default CardContainer;
