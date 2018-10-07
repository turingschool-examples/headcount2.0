import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import './CardContainer.css'

const CardContainer = ({districts}) => {

  const cards = Object.keys(districts).map((district, index) => {
    const stats = districts[district].data
    console.log(stats)
    const stats2 = districts[district].stats
    console.log(stats2)
    return <Card key={index} location={district} data={stats} />
  })

  return(
    <main className="CardContainer">
       { cards }
    </main>
  )
}

CardContainer.propTypes = {
  districts: PropTypes.array.isRequired
}

export default CardContainer