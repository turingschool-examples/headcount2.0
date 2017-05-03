import React, { Component } from 'react';
import { Card } from './Card';


export const Cards = ({ data }) => {
  const keys = Object.keys(data)
  return(
    <section>
      {keys.map( (key, index) => {
        return(
          <div key={index}>
            { data[keys] }
          </div>
        )
      })}
    </section>
  )
}
