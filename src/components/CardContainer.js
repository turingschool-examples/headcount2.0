import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

import '../css/CardContainer.css'

const CardContainer = (props) => {
  const cards = Object.keys(props.data).map((district) => {
        return (
          <Card 
            data={props.data[district]}
            key={props.data[district].location}
            processSelection={props.processSelection}
            selection={props.selection}
          />
        )
      })
  return (
    <section className="card-container">
      {cards}
    </section>
  )
}

CardContainer.propTypes = {
  data: PropTypes.object.isRequired,
  processSelection: PropTypes.func.isRequired,
  selection: PropTypes.array.isRequired
}

export default CardContainer;