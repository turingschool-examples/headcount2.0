import React from 'react';
import './Card.css';

const Card = ({schoolNames, selectedCards, helper, id}) => {
  const schoolName = helper.data[schoolNames].location;
  const annualData = helper.data[schoolNames].annualData;
  return (
    <div className="card" onClick={() => selectedCards(schoolNames)}>
      <h1>{schoolName.toUpperCase()}</h1>
      {Object.keys(annualData).map((year, index) => {
        if (annualData[year] <= 0.5) {
          return (
            <ul key={Math.round(Date.now() * Math.random())}>
              <li><p className="less-than data">{year}: {annualData[year]}</p></li>
            </ul>
          )
        } else {
          return (
            <ul key={Math.round(Date.now() * Math.random())}>
              <li><p className="greater-than data">{year}: {annualData[year]}</p></li>
            </ul>
          )
        }
      })}
    </div>
  )
}

export default Card;
