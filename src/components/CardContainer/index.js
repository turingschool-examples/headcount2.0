import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import './CardContainer.css'

const CardContainer = ({districts}) => {

  const cards = Object.keys(districts).map((district, index) => {
    console.log(`district: ${district}`)
    return <Card key={index} location={district} {...districts[district]} />
  })

  return(
    <main className="CardContainer">
       { cards }
    </main>
  )
}

CardContainer.propTypes = {
  districts: PropTypes.object.isRequired
}

export default CardContainer