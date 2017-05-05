import React from 'react';
import { CardData } from './CardData';

export const Cards = ({ data, onClick }) => {
  return (
    <section className='card-holder'
             onClick={(e) => {onClick(e)}}>
      {
        Object.keys(data)
        .map( (key, index) => {
          return (
            <div className='card'
                 key={index}>
              <p className='school-name'>
                <span>School District:</span>
                {data[key].location}</p>
              <CardData data={data} schoolKey={key} />
            </div>
          )
        })
      }
    </section>
  )
}
