import React from 'react';
import PropTypes from 'prop-types';

import '../css/ComparisonCard.css';

const ComparisonCard = (props) => {
  let averages = props.compareDistrictAverages(props.data[0].location, props.data[1].location)
  return (
    <article className='comparison-card'>
      <h1 className='comparison-school'>{props.data[0].location}</h1>
      <h1 className='comparison-average'>average</h1>
      <p className='district-average'>{averages[props.data[0].location]}</p>
      <h1 className='comparison-school'>{props.data[1].location}</h1>
      <h1 className='comparison-average'>average</h1>

      <p className='district-average'>{averages[props.data[1].location]}</p>
      <h1 className='comparison-school'>Compared</h1>
      <p className='comparison-data'>{averages.compared}</p>
    </article>
  )
}

ComparisonCard.propTypes = {
  data: PropTypes.array.isRequired
}

export default ComparisonCard;