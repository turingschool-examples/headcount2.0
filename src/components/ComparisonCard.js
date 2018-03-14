import React from 'react'
import PropTypes from 'prop-types'

const ComparisonCard = ({ comparisonCard }) => {
  const [ cardAAvg, cardBAvg, comparedValue ] = Object.values(comparisonCard);
  const [ cardALocation, cardBLocation ] = Object.keys(comparisonCard);

  return (
    <article>
      <p>{cardALocation}</p>
      <p>{cardAAvg}</p>
      <p>{cardBLocation}</p>
      <p>{cardBAvg}</p>
      <p>{comparedValue}</p>
    </article>
  )
}

ComparisonCard.propTypes = {
  comparisonCard: PropTypes.object
}

export default ComparisonCard