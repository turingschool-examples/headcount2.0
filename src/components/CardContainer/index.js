import React from 'react'
import PropTypes from 'prop-types'
import Card from '../Card'
import './CardContainer.css'

const CardContainer = ({districts, adjustComparisons}) => {
  const cards = Object.keys(districts).map((district, index) => {
    const stats = districts[district].stats

    return <Card key={index}
                 location={district}
                 stats={stats}
                 adjustComparisons={adjustComparisons}
           />
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