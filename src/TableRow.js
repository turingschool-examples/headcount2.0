import React, { Component } from 'react';

const TableRow = ( year, yearData ) => {
  const tableCellYear = Object.values(year)
  const tableCellData = Object.values(yearData)

  return (
    <tr>
      <td>{tableCellYear}</td>
      <td>{tableCellData}</td>
    </tr>
  )

}

export default TableRow;