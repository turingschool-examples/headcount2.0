import React, { Component } from 'react';
import TableRow from './TableRow';

const Card = ({ cardData }) => {
  const { location, stats } = cardData;
  const years = Object.keys(stats);

  const tableRows = years.map((year, index) => {
    const yearData = stats[year]
    return <TableRow 
    year={year} 
    yearData={yearData}
    key={index}
    />
  })

  return (
    <div>
      <h1>{cardData.location}</h1>
      <table>
        {tableRows}
      </table>
    </div>
  )

}

export default Card