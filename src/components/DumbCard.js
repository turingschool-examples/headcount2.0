import React from 'react';
import PropTypes from 'prop-types';

import Score from './Score';

import '../css/Card.css';

const DumbCard = (props) => {
  return (
    <article className='card'>
      <h1 className="location">{props.data.location}</h1>
      {Object.keys(props.data.stats).map((year) => {
        return (
          <Score 
            data={props.data.stats[year]}
            year={year}
            key={year}
          />
        )
      })}
    </article>
  ) 
}

DumbCard.propTypes = {
  data: PropTypes.object.isRequired
}

export default DumbCard;