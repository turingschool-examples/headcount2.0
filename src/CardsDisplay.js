import React from 'react';
import Card from './Card'

const CardsDisplay = ({ cards }) => {
  return (
    <section className="cards-display">
      {Object.keys(cards).map((key, index) => {
        return (
          <section key={index}>
            <p>{cards[key].location}</p>
            <Card school={key}
                  data={cards}/>
          </section>
        )
      })}
    </section>

  )
}


export default CardsDisplay
