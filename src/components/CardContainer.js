import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

import '../css/CardContainer.css'

const CardContainer = (props) => {
  let cards;
  if (props.filterString.length > 0) {
    const filter = props.data.findAllMatches(props.filterString);
    cards = filter.map((district) => {
      // console.log(district.stats, district.location)
      return (
        <Card 
          data={district}
          key={district.location}
          processSelection={props.processSelection}
          selection={props.selection}
        />
      )
    })
  } else {
   cards = Object.keys(props.data.stats).map((district) => {
      return (
        <Card 
          data={props.data.stats[district]}
          key={props.data.stats[district].location}
          processSelection={props.processSelection}
          selection={props.selection}
        />
      )
    })
  }
  return (
    <section className="card-container">
      {cards}
    </section>
  )
}

CardContainer.propTypes = {
  data: PropTypes.object.isRequired,
  processSelection: PropTypes.func.isRequired,
  selection: PropTypes.array.isRequired,
  filterString: PropTypes.string.isRequired
}

export default CardContainer;