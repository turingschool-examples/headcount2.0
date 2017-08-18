import React from 'react';
import SchoolCard from './SchoolCard'


const Comparison = ({ cardData, findAverage }) => {
  console.log(cardData);

  const schoolCards =  cardData.map((school, i) =>
    <SchoolCard data={school}
                 key={i}
         findAverage={findAverage} /> );

  return(
    <div className='compare-cards'>
      { schoolCards }
    </div>
  )
}

export default Comparison
