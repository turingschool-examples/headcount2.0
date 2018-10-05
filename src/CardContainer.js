import React from 'react'
import Card from './Card'
import './CardContainer.css'
import PropTypes from 'prop-types'

const CardContainer = ({data}) => {

  const cards = data.map(district => {
    return <Card {...district} key={Math.random()} />
  })
  
  return(
    <div className='card-container'>
      {cards}
    </div>

  )
}

CardContainer.propTypes = {
  stats: PropTypes.object.isRequired
}

export default CardContainer
