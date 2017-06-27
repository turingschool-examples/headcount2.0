import React from 'react';


const Card = ({ city }) => {
  // console.log(data);
  return (
    <div>
      <h1>{city.location}</h1>
      {
        Object.keys(city.data).map(date => {
          return (
            <div>
              <p>{date}</p>
              <p>{city.data[date]}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default Card
