import React from 'react';
import './styles/TableRow.css';
import PropTypes from 'prop-types';

const TableRow = ( {year, yearData, className} ) => {
  return (
    <tr className={className}>
      <td>{year}</td>
      <td>{yearData}</td>
    </tr>
  );
};

TableRow.propTypes = {
  year: PropTypes.string.isRequired,
  yearData: PropTypes.number.isRequired,
  className: PropTypes.string.isRequired
};

export default TableRow;