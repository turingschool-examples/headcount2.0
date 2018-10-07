import React from 'react';

const SchoolCard = 
  ({ data, index, setStateOfCompare }) => {
    let str1 = data;
    return (
      <div className="school-card">
        <h1 className='card-header' key={Object.keys(data)}>{Object.keys(data)}</h1>
        <ul className='card-data'>
          {Object.keys(data).map(location => 
            Object.keys(data[location]).map(year => 
              <li key={Object.keys(data), index} 
                className={data[location][year] < 0.5 ? 'isLess' : 'isMore'}>
                {year}: {data[location][year]}</li>))}
        </ul>
        <button onClick={() => setStateOfCompare(str1)}>Compare Data</button>
      </div>
    );
  };

export default SchoolCard;