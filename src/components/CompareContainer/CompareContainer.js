import React from 'react';
import Card from '../Card/Card';
import arrow from '../../images/arrow2.gif';
import './CompareContainer.css';

const CompareContainer = ({hideComparison,school1, school2, comparison, handleCompareCards, removeComparison}) => {
const display = getDisplay();

function getDisplay() {
  if (hideComparison === 'hide') {
    return; 
  } else if (hideComparison === 'displayOne') {
      return (
        <section className={hideComparison}>
          <Card schoolData={school1}
                handleCompareCards={handleCompareCards}
                size='small'
          />
          <div className="instructions-cont">
            <p className='instructions'>click another to compare</p>
            <img src={arrow} alt="Choose a Card To Compare With" id="arrow"/>
          </div>
          <div className='shadow-card'>
          </div>
        </section>
      );
  } else if (hideComparison === 'displayAll') {
    return (
      <section className={hideComparison}>
        <Card schoolData={school1}
              handleCompareCards={handleCompareCards}
              size='large'
        />
        <article className="comparison">
          <div>
            <h3>{school1.location}</h3>
            <h4>{comparison[school1.location]}</h4>
          </div>
          <div>
            <h3>Differential</h3>
            <h4 className='compare-total'>{comparison.compared}</h4>
          </div>
          <div>
            <h3>{school2.location}</h3>
            <h4>{comparison[school2.location]}</h4>
          </div>
        </article>
        <Card schoolData={school2}
              handleCompareCards={handleCompareCards}
              size='large'
        />
        <button onClick={removeComparison}>Reset</button>
      </section>
    );
  }
}

  return (
    <div className="CompareContainer">
      {display}
    </div>
  );
};

export default CompareContainer;