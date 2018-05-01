import React from 'react';
import Card from '../Card/Card.js';

const CardContainer = ( { repo } ) => {
  const repoKeys = Object.keys(repo)
  console.log(repoKeys)
  const cardList = repoKeys.map(district => {
    let title = district;
    let listOfData = repo[district];

    return <Card title={title}
                 listOfData={listOfData} />

  })

  return (
      <div className="card-container">
        { cardList }
      </div>
    )
}

export default CardContainer; 