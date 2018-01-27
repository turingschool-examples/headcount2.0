import React from 'react';
import Card from '../Card/Card';
import arrow from '../../images/arrow2.gif';
import PropTypes from 'prop-types';


const CompareInstructions = ({ comparisonData, handleCompareCards }) => {
  
  return (
    <section className="displayOne">
      <Card 
        schoolData={ comparisonData.school1 }
        handleCompareCards={ handleCompareCards }
        size='small'
      />
      <div className="instructions-cont">
        <p className='instructions'>
          click another to compare
        </p>
        <img src={arrow} alt="click another card to see a comparison of the two" />
      </div>
      <div className='shadow-card'>
      </div>
     </section>
  )
}

const { shape, string, objectOf, number, func, object } = PropTypes;

CompareInstructions.propTypes = {
  handleCompareCards: func.isRequired,
  comparisonData: shape({
    comparison: object
  })
}

export default CompareInstructions;