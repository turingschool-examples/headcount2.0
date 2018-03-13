import React from 'react';
import './styles/Card.css'

const Card = (props) => {

  const years = Object.keys(props.school.data)

  return (
    <div>
      <h1>{props.school.location}</h1>
      <ul>
        {
          years.map((year, i) => {
            if (props.school.data[year] < .5) {
              return <li
                key={i}
                className="year-red">
                {year}: {props.school.data[year]}
              </li>
            } else {
              return <li
                key={i}
                className="year-green">
                {year}: {props.school.data[year]}
              </li>
            }
          })
        }
      </ul>
    </div>
  )
}

export default Card