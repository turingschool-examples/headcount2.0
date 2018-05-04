import React, { Component } from 'react';
import TableRow from './TableRow';
import './styles/Card.css';

const Card = ({ cardData, className }) => {
  const { location, stats } = cardData;
  const years = Object.keys(stats);

  const tableRows = years.map((year, index) => {
    const yearData = stats[year];
    return (
      yearData > 0.5 ?
        <TableRow
          year={year}
          yearData={yearData}
          key={index}
          className="high-value"
        />
        :
        <TableRow
          year={year}
          yearData={yearData}
          key={index}
          className="low-value"
        />
    );
  });

  return (
    <div className="card">
      <h1>{cardData.location}</h1>
      <table>
        <tr>
          <th>Year</th>
          <th>Mystery Data</th>
        </tr>
        {tableRows}
      </table>
    </div>
  );
};

export default Card;