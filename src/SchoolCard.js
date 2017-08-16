import React, { Component } from 'react';
import './SchoolCard.css';
import PropTypes, {object, func} from 'prop-types'

const SchoolCard = ({ data, findAverage }) => {
  let colorClass;
  const {Location, Data} = data;
  const yearsKeys = Object.keys(Data);
  const listItems = yearsKeys.map( (year, i) => {
  Data[year] < .5 ? colorClass = "year-data below-five" : colorClass = "year-data";

  return <li key={i} className={colorClass}><span className="data-point">{year}:</span> <span className="data-point">{Data[year]}</span></li>
});


  findAverage(Location) < .5 ? colorClass ="school-card low-average" : colorClass="school-card";

  return (
    <div className={colorClass}>
      <h3 className="school-name">{Location}</h3>
      <p className="average">{findAverage(Location)}</p>
      <ul className="year-percentages">
        {listItems}
      </ul>
    </div>
  )
}

SchoolCard.propTypes = {
  data: object,
  findAverage: func
}

export default SchoolCard
