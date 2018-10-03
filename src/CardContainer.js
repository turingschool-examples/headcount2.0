import React from 'react'
import Card from './Card'


const CardContainer = ( {data} ) => {
  const dataKeys = Object.keys(data)
  const exp = dataKeys.map( point =>
    <Card {...data[point]} />
  )
  return (
        <div>
         { exp }
        </div>
  )
}

export default CardContainer