import React, { Component } from 'react';
import './styles/TableRow.css';

const TableRow = ( {year, yearData, className} ) => {
  return (
    <tr className={className}>
      <td>{year}</td>
      <td>{yearData}</td>
    </tr>
  )

}

export default TableRow;