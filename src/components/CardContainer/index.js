import React from 'react'
import Card from '../Card'
import './CardContainer.css'

const CardContainer = ({districts}) => {
  const cards = Object.keys(districts).map((district, index) => <Card key={index} {...(districts[district])} />)

  return(
    <main className="CardContainer">
       { cards }
    </main>
  )
}

export default CardContainer