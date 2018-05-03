import React, { Component } from 'react';
import TableRow from './TableRow';

const Card = ({data}) => {
  const foo = data.stats;
  const keys = Object.keys(foo);
  // console.log(keys)
  const tableRows = keys.map(year => {
    return <TableRow year={year} />
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