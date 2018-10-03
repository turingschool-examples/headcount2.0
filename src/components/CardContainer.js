import React from 'react'

import Card from './Card'

import '../css/CardContainer.css'

const CardContainer = (props) => {
  return (
    <section className="card-container">
      {Object.keys(props.data).map((district) => {
        return (
          <Card 
            data={props.data[district]}
            key={props.data[district].location}
          />
        )
      })}
    </section>
  )

}

export default CardContainer;