import React from 'react';

const SchoolCard = ({location, data}) => {
return (
  <div>
    <h1>{Object.keys(data)}</h1>
    <ul>
      {Object.keys(data).map(location=> Object.keys(data[location]).map(year => <li>{location}: {data[location][year]}</li>))}
    </ul>
  </div>
  )
}

export default SchoolCard;