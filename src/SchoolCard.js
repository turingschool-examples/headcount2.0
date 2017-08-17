import React from 'react';
import './SchoolCard.css';
import {object, func} from 'prop-types'

const SchoolCard = ({ data, findAverage }) => {
  const {Location, Data} = data;
  const yearsKeys = Object.keys(Data);
  const average = findAverage(Location);
  let divClass = average < .5 ? divClass = "low-average" : divClass= "";
  const listItems = yearsKeys.map( (year, i) => {
  const colorClass = Data[year] < .5 ? 'below-five' : ''

  return <li key={i} className={`${colorClass} year-data`}><span className="data-point">{year}:</span> <span className="data-point">{Data[year]}</span></li>
});

  return (
    <div className={`${divClass} school-card`}>
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
