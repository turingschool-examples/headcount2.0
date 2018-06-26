import React from 'react';

const DistrictCard = props => {
  return (
    <section> 
      <h2>{props.location}</h2>
      <ul>
        {props.stats.map}
      </ul>
    </section>
  )
}