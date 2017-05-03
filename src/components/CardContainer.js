import React from 'react';
import Card from './Card';

const CardContainer = ({handleData}) => {
  return(
    <section>
      {Object.keys(handleData.district).map(key => {
        return (
          <div key={handleData.district[key].location}>
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
