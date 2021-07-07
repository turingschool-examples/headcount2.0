import React from 'react';

const SchoolCard = ({location, data}) => {
return (
  <div className="school-card">
    <h1>{Object.keys(data)}</h1>
    <ul>
      {Object.keys(data).map(location => Object.keys(data[location]).map(year => <li className={data[location][year] < 0.5 ? 'isLess' : 'isMore'}>{year}: {data[location][year]}</li>))}
    </ul>
  </div>
  )
}

export default SchoolCard;