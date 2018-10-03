import React from 'react'

import Card from './Card'

import '../css/CardContainer.css'

const CardContainer = (props) => {
  return (
    <section className="card-container">
      {Object.keys(props.data.stats).map((district) => {
        return (
          <Card 
            data={props.data.stats[district]}
            // key={props.data[district]}
          />
        )
      })}
    </section>
  )

}

export default CardContainer;