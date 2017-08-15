import React, { Component } from 'react';

const SchoolCard = ({ data }) => {
  const {Location, Data} = data;
  const yearsKeys = Object.keys(Data);
  const listItems = yearsKeys.map( (year, i) => <li key={i} className="year-data">{year}: {Data[year]}</li>);
  const averages = yearsKeys.reduce( (average, year) => {
    average += Data[year]
    return average
  }, 0) / yearsKeys.length
  const roundedAverages = Math.round(100*averages)/100;

  return (
    <div>
      <h3 className="school-name">{Location}</h3>
      <p className="average">{roundedAverages}</p>
      <ul className="year-percentages">
        {listItems}
      </ul>
    </div>
  )
}

export default SchoolCard
