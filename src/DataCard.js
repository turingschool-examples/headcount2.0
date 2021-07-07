import React, { Component } from 'react';
import PropTypes from 'prop-types';


const DataCard = ({school, compareTwoCards}) => {

const data = Object.keys(school.stats).map((year, index) => { return <li className={school.stats[year] < 0.5 ? 'less-than' : 'more-than' }>{year}: {school.stats[year]}</li> })

  return (
    <div 
      key={Date.now()}
      className='data-card'
      onClick={() => compareTwoCards(school.location, school.stats)}
    >
      <h1>{school.location}</h1>
      <ul>
        <li>{data}</li>
      </ul>
    </div>
  );
};

DataCard.propTypes = {
  school: PropTypes.object,
  compareTwoCards: PropTypes.func
};

export default DataCard;