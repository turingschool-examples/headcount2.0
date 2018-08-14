import React from 'react'
import './Card.css'


const Card = ({ location, stats }) => {
  console.log(location)
  return (
   <div className="cards">
    <h2>{location}</h2>
      {
        Object.keys(stats).map(stat => {
          return (
            <article>
              <ul>
                {stat}: {stats[stat]}
              </ul>
            </article>
          )
        })
      }
   </div>
  )
}

export default Card