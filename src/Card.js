import React from 'react';

const Card = ({ city, clickActive }) => {

  const clickColor = (number) => {
    return number > .5 ? 'green' : 'red';
  }

  const renderTable = Object.keys(city.data).map(date => {
      return (
          <tr key={date} className={clickColor(city.data[date])}>
            <td>{date}</td>
            <td>
              {city.data[date]}
            </td>
          </tr>
      )
    });

  return (
    <div className='card' onClick= {() => clickActive(city.location)}>
      <h3>{city.location}</h3>
      <table className='data-table'>
        <tbody>
        </tbody>
      </table>
    </div>
  )
}
// {renderTable}

export default Card
