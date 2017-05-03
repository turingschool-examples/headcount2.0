import React from 'react';
import Card from './Card'

const CardsDisplay = ({ cards }) => {

  const dataArr = Object.keys(cards)

    dataArr.map((card, index) => {
    return (

      <Card key={index} {...card}

        />

    )
  })

console.log(dataArr)


  return(
    <div>
      {dataArr}
    </div>
  );
}

export default CardsDisplay
