import React from 'react'

import Score from './Score'

import '../css/Card.css'

const Card = ({ data }) => {
  console.log(Object.keys(data.stats))
  return (
    <article className="card">
      <h1 className="location">{data.location}</h1>
      {Object.keys(data.stats).map((year) => {
        return (
          <Score 
            data={data.stats[year]}
            year={year}
          />
        )
      })}
    </article>
  )
}

export default Card;