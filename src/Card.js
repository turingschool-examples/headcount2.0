import React, { Component } from 'react'



const Card = ({location, stats}) => {
    const years = Object.keys(stats)
    const schoolData = years.map( year => {
      return <p>{year} : {stats[year]}</p>
    })
    return (
      <div>
        <h3>{location}</h3>
          {schoolData}
      </div>
    )
  }

export default Card