import React from 'react';
import { CardData } from './CardData';

export const Cards = ({ data }) => {
  return (
    <section className='card-holder'>
      {
      Object.keys(data)
      .map( (key, index) => {
        return (
          <div className='card' key={index}>
            <p>School: {data[key].location}</p>
            <CardData data={data} schoolKey={key} />
          </div>
        )
      })
      }
    </section>
  )
}
