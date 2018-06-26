import React from 'react';

const DistrictCard = (location, stats) => {
  return (
    <section> 
      <h2>{ location }</h2>
      <ul>
        <span>{stats.map} : {stats.data} </span>
      </ul>
    </section>
  )
}

export default DistrictCard;