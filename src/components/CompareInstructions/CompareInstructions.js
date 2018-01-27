import React from 'react';
import Card from '../Card/Card';
import arrow from '../../images/arrow2.gif';


const CompareInstructions = ({ comparisonData, handleCompareCards }) => {
  
  return (
    <section className="displayOne">
      <Card 
        schoolData={ comparisonData[0] }
        handleCompareCards={ handleCompareCards }
        size='small'
      />
      <div className="instructions-cont">
        <p className='instructions'>
          click another to compare
        </p>
        <img src={ arrow } alt="Choose a Card To Compare With" id="arrow"/>
      </div>
      <div className='shadow-card'>
      </div>
     </section>
  )
}

export default CompareInstructions;