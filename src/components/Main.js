import React from 'react';
import '../styles/Main.css';
import Card from './Card';
import PropTypes from 'prop-types';

const Main = ( { districts } ) => {
  const district = districts.map((district, idx) => <Card info={district} key={idx}/>);
  return (
    <main className='card-container'>
      {district}
    </main>
  )
}

Main.propTypes = {
  districts: PropTypes.array
}

export default Main