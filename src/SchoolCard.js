import React, { Component } from 'react';
import './SchoolCard.css';

  const SchoolCard = ({ data }) => {
    const {Location, Data} = data;

    const yearsKeys = Object.keys(Data);

    const listItems = yearsKeys.map( (year, i) => {

    let colorClass;

    Data[year] < .5 ? colorClass = "year-data below-five" : colorClass = "year-data";

    return <li key={i} className={colorClass}><span className="data-point">{year}:</span> <span className="data-point">{Data[year]}</span></li>
  });

  const averages = yearsKeys.reduce( (average, year) => {
    average += Data[year]
    return average
  }, 0) / yearsKeys.length;

  const roundedAverages = Math.round(100*averages)/100;

  let colorClass;

  roundedAverages < .5 ? colorClass ="school-card low-average" : colorClass="school-card";

  return (
    <div className={colorClass}>
      <h3 className="school-name">{Location}</h3>
      <p className="average">{roundedAverages}</p>
      <ul className="year-percentages">
        {listItems}
      </ul>
    </div>
  )
}

export default SchoolCard
