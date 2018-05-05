import React from 'react';
import TableRow from './TableRow';
import './styles/Card.css';
import PropTypes from 'prop-types';

const Card = ({ cardData, updateComparedSchools }) => {
  
  const { stats } = cardData;
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
    <div
      className="card"
      onClick={() => updateComparedSchools(cardData.location)} >
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

Card.propTypes = {
  cardData: PropTypes.object.isRequired
};

export default Card;