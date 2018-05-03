import React, { Component } from 'react';

const TableRow = ( year ) => {
  const foo = Object.values(year)
  console.log(foo)
  return (
    <tr>
      <td>{foo}</td>
      <td></td>
    </tr>
  )

}

export default TableRow;