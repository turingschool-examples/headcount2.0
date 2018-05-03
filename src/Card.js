import React, { Component } from 'react';
import TableRow from './TableRow';

const Card = ({data}) => {
  const statsObj = data.stats;
  const keys = Object.keys(statsObj);
  // console.log(keys)
  const tableRows = keys.map(year => {
    return <TableRow year={year} value={statsObj[year]}/>
  })
  return (
    <div>
      <h1>{data.location}</h1>
      <table>
        {tableRows}
      </table>
    </div>
  )

}

export default Card