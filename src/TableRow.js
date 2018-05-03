import React, { Component } from 'react';

const TableRow = ( year, value ) => {
  const tableCellYear = Object.values(year)
  const tableCellData = Object.values(value)

  return (
    <tr>
      <td>{tableCellYear}</td>
      <td>{tableCellData}</td>
    </tr>
  )

}

export default TableRow;