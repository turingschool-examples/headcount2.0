import React from 'react';

const Card = ({ city, clickActive, activeCards }) => {
  const clickColor = (number) => number > .5 ? 'green' : 'red';
  let renderTable;

  if(activeCards.length > 0 && activeCards.map(e => e.location).includes(city.location)) {
    renderTable = Object.keys(city.data).map((date, i) => {
        return (
            <tr key={date}>
              <td>{date}</td>
              <td className={'data-value ' + clickColor(city.data[date])}>
                {city.data[date]}
              </td>
            </tr>
        )
      });
  }

  return (
    <div className='card' onClick= {() => clickActive(city.location)}>
      <h3>{city.location}</h3>
      <table className='data-table'>
        <tbody>
          {renderTable}
        </tbody>
      </table>
    </div>
  )
}

export default Card
