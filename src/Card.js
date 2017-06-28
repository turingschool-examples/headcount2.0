import React from 'react';

const Card = ({ city, clickActive }) => {

  const clickColor = (number) => {
    return number > .5 ? 'green' : 'red';
  }

  // console.log(city)
  return (
    <div className='card' onClick= {() => clickActive(city.location)}>

      <h1>{city.location}</h1>
      <table>
        <tbody>
        {
          Object.keys(city.data).map(date => {
            return (
                <tr key={date}>
                  <td>{date}</td>
                  <td> : </td>
                  <td className={clickColor(city.data[date])}>
                    {city.data[date]}
                  </td>
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
