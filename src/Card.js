import React from 'react';
import Graph from './Graph'

const Card = ({ city, clickActive }) => {
  return (
    <div className='card' onClick= {() => clickActive(city.location)}>

      <h1>{city.location}</h1>
        <div style={{backgroundColor: 'white'}}>
          <Graph data={city.data}/>
        </div>
      <table>
        <tbody>
        {
          Object.keys(city.data).map(date => {
            return (
                <tr key={date}>
                  <td>{date}</td>
                  <td>{city.data[date]}</td>
                </tr>
            )
          })
        }
      </tbody>
      </table>
    </div>
  )
}

export default Card
