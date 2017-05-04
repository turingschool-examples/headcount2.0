import React from 'react';
import Card from './Card'

const CardsDisplay = ({ cards }) => {
  return (

    <section className='card-container'>
      {Object.keys(cards).map((key, index) => {
        return (
          <section className='card' key={index}>
            <p className='card-title'>{cards[key].location}</p>
            <Card school={key}
                  data={cards}/>
          </section>
        )
      })}
    </section>

  )
}


export default CardsDisplay
