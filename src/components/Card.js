import React from 'react';
import PropTypes from 'prop-types';

import Score from './Score';

import '../css/Card.css';

const Card = (props) => {
  return (
    <article 
      className={props.data.classLabel}
      onClick={() => {
        props.processSelection(props.data);
      }}
    >
      <h1 className="location">{props.data.location}</h1>
      <section className="score-container">
        {Object.keys(props.data.stats).map((year) => {
          return (
            <Score 
              data={props.data.stats[year]}
              year={year}
              key={year}
            />
          );
        })}
      </section>
    </article>
  );
};

Card.propTypes = {
  selection: PropTypes.array.isRequired,
  data: PropTypes.object.isRequired,
  processSelection: PropTypes.func.isRequired
};

export default Card;