import React from 'react';
import PropTypes from 'prop-types';

const Score = (props) => {
  let icon;
  let alt;

  if (props.data >= .5) {
    icon = './drop-up-arrow.svg';
    alt = 'up';
  } else {
    icon = './drop-down-arrow.svg';
    alt = 'down';
  }
  
  return (
    <section className="score-wrapper">
      <p className='score'><img src={icon} alt={alt}/> {props.year}: {props.data}</p>
    </section>
  );
};

Score.propTypes = {
  year: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired
};

export default Score;