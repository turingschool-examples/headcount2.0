import React from 'react';
import './SchoolCard.css';
import {object, func} from 'prop-types'

const SchoolCard = ({ data, findAverage }) => {
  const {Location, Data} = data;
  const yearsKeys = Object.keys(Data);
  const average = findAverage(Location)
  let colorClass;
  let divClass = average < .5 ? colorClass ="school-card low-average" : colorClass="school-card";
  const listItems = yearsKeys.map( (year, i) => {
  Data[year] < .5 ? colorClass = "year-data below-five" : colorClass = "year-data";

  return <li key={i} className={colorClass}><span className="data-point">{year}:</span> <span className="data-point">{Data[year]}</span></li>
});

  return (
    <div className={divClass}>
      <h3 className="school-name">{Location}</h3>
      <p className="average">{average}</p>
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
