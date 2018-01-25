import React from 'react';
import Card from '../Card/Card';
import arrow from '../../images/arrow2.gif';
import './CompareContainer.css';

const CompareContainer = ({hideComparison, school1, school2, comparison}) => {

const display = getDisplay();

function getDisplay() {
  if (hideComparison === 'hide') {
    return (
      <div className={hideComparison}>
      </div>
    ); 
  } else if (hideComparison === 'displayOne') {
      return (
        <section className={hideComparison}>
          <Card schoolData={school1}
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
              size='large'
        />
        <article className="comparison">
          <h3>Title1</h3>
          <h4>numbersss</h4>
          <h3>comparissonn</h3>
          <h3>Title2</h3>
          <h4>More numbaahs</h4>
          }
        </article>
        <Card schoolData={school2}
              size='large'
        />
        <button>MURDER</button>
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